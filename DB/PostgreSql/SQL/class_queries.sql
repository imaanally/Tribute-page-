-- Creating a table
create table student(
    id serial primary key,
    name varchar(20),
    email varchar(50),
    phone integer,
    is_married boolean,
    marks numeric,
    spirit_animal json,
    dob date,
    created_at timestamp default current_timestamp,
    created_at_timezone timestamptz default current_timestamp
);

-- Insert a student
insert into student(name, email, phone, is_married, marks, spirit_animal, dob)
values ('Imaan', 'imaan@example.com', 712345678, false, 85.5, '{"animal": "cat"}', '2001-01-01');

-- View the student
select * from student;

-- Creating a table with constraints
create table inventory(
    id bigserial primary key,
    name varchar(50) not null,
    barcode integer not null unique,
    product_code varchar(100) unique,
    buying_price integer not null
        CONSTRAINT buying_price_must_be_greater_than_0
        check(buying_price > 0),
    selling_price integer not null check(selling_price > 0),
    created_at timestamptz not null default current_timestamp
);

-- Insert valid inventory items
insert into inventory(name, barcode, product_code, buying_price, selling_price)
values ('Laptop', 12345, 'LAP001', 50000, 65000);

insert into inventory(name, barcode, product_code, buying_price, selling_price)
values ('Keyboard', 12346, 'KEY001', 500, 1500);

-- View inventory
select * from inventory;
