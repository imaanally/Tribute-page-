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
