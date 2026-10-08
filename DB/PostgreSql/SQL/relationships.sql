-- ONE-TO-ONE RELATIONSHIP
create table address(
    id bigserial primary key,
    student_id bigint not null unique references student(id),
    location text not null,
    county varchar(250),
    geo_location json,
    created_at timestamptz not null default current_timestamp
);


-- ONE-TO-MANY RELATIONSHIP
create table discipline(
    id uuid primary key default gen_random_uuid(),
    student_id bigint not null references student(id),
    name varchar(250) not null,
    description text,
    created_at timestamptz not null default current_timestamp
);


-- INSERT ADDRESS
insert into address(student_id, location, county, geo_location)
values (1, 'South B', 'Nairobi', '{"lat": -1.31, "lng": 36.82}');


-- INSERT DISCIPLINE
insert into discipline(student_id, name, description)
values (1, 'Late arrival', 'Arrived late to class');

insert into discipline(student_id, name, description)
values (1, 'Missed assignment', 'Did not submit the assignment');


-- READ RELATIONSHIP DATA
select * from address;

select * from discipline;


-- ON DELETE CASCADE EXAMPLE
create table cascade_test(
    id bigserial primary key,
    student_id bigint not null references student(id) on delete cascade
);


-- ON DELETE SET NULL EXAMPLE
create table set_null_test(
    id bigserial primary key,
    student_id bigint references student(id) on delete set null
);
-- ONE-TO-MANY RELATIONSHIP: STUDENT -> GUARDIAN
create table guardian(
    id serial primary key,
    name varchar(250),
    student_id bigint not null references student(id) on delete cascade
);
-- INSERT GUARDIANS
insert into guardian (name, student_id)
values
    ('John Mwangi', 1),
    ('Tina tina', 4),
    ('Ivy Ivy', 5),
    ('Jane Jane', 6),
    ('Sun Lu', 6),
    ('Ji Ji', 6),
    ('Joanna', 6);
-- INNER JOIN
select *
from student as st
inner join guardian as gu
on gu.student_id = st.id;


-- LEFT JOIN
select
    st.id as student_id,
    st.name as student_name,
    gu.name as guardian_name
from student as st
left join guardian as gu
on gu.student_id = st.id;


-- RIGHT JOIN
select
    st.id as student_id,
    st.name as student_name,
    gu.name as guardian_name
from student as st
right join guardian as gu
on gu.student_id = st.id;


-- CROSS JOIN
select
    st.id as student_id,
    st.name as student_name,
    gu.name as guardian_name
from guardian as gu
cross join student as st;
-- AGGREGATE QUERIES

-- COUNT
select
    count(*) as total_students
from student;


-- COUNT, AVG, SUM, MAX, MIN
select
    count(*) as total_students,
    avg(marks) as average_marks,
    sum(marks) as total_marks,
    max(marks) as highest_marks,
    min(marks) as lowest_marks
from student;


-- AGGREGATE + WHERE
select
    count(*) as passing_students,
    avg(marks) as average_passing_marks
from student
where marks >= 50;


-- GROUP BY
select
    student_id,
    count(*) as total_discipline_records
from discipline
group by student_id;


-- GROUP BY + INNER JOIN
select
    st.name as student_name,
    count(*) as total_discipline_records
from discipline as di
inner join student as st
on st.id = di.student_id
group by st.name
order by total_discipline_records desc;


-- GROUP BY + LEFT JOIN
select
    st.id as student_id,
    st.name as student_name,
    count(ss.subject_id) as total_subjects_enrolled
from student as st
left join student_subject as ss
on st.id = ss.student_id
group by st.id, st.name
order by total_subjects_enrolled desc;


