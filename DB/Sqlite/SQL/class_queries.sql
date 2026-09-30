-- Creating a table
create table student(
    id integer primary key autoincrement,
    name text,
    email text,
    phone integer,
    is_married integer,
    marks real,
    dob date
);

-- Insert a student
insert into student(name, email, phone, is_married, marks, dob)
values ('Imaan', 'imaan@example.com', 712345678, 0, 85.5, '2001-01-01');

-- View the student
select * from student;
