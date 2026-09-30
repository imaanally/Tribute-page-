-- ALTER TABLE
alter table inventory add column
description text;

-- UPDATE existing rows
update inventory
set description = 'No description';

-- Make the column NOT NULL
alter table inventory
alter column description set not null;


-- CREATE / INSERT
insert into inventory(name, barcode, buying_price, selling_price, description)
values ('Mouse', 12347, 1000, 1500, 'Wireless mouse');


-- READ all data
select * from inventory;

-- READ specific columns
select id, name, barcode from inventory;

-- WHERE
select * from inventory
where buying_price > 200;

-- IN
select * from inventory
where buying_price in (500, 1000);

-- LIKE
select * from inventory
where name like '%o%';

-- ORDER BY
select * from inventory
order by buying_price asc;

-- LIMIT
select * from inventory
order by buying_price asc
limit 2;


-- UPDATE
update inventory
set selling_price = 1700
where id = 6;


-- DELETE
delete from inventory
where id = 6;
