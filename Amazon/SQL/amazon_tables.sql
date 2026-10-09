-- MEMBER
create table member(
    id uuid primary key default gen_random_uuid(),
    name varchar(250) not null,
    email varchar(250) not null unique,
    phone varchar(50) not null unique,
    created_at timestamptz not null default current_timestamp,
    updated_at timestamptz not null default current_timestamp
);


-- MEMBER PASSWORD
create table member_password(
    id uuid primary key default gen_random_uuid(),
    member_id uuid not null unique references member(id),
    password text not null,
    created_at timestamptz not null default current_timestamp,
    updated_at timestamptz not null default current_timestamp
);


-- PRODUCT
create table product(
    id uuid primary key default gen_random_uuid(),
    name varchar(250) not null,
    description text,
    buying_price numeric not null,
    selling_price numeric not null,
    quantity integer not null,
    created_at timestamptz not null default current_timestamp,
    updated_at timestamptz not null default current_timestamp
);


-- ORDER STATUS
create table order_status(
    id uuid primary key default gen_random_uuid(),
    name varchar(100) not null,
    description text,
    icon text,
    background_color varchar(50),
    text_color varchar(50),
    created_at timestamptz not null default current_timestamp,
    updated_at timestamptz not null default current_timestamp
);


-- ORDER
create table "order"(
    id uuid primary key default gen_random_uuid(),
    member_id uuid not null references member(id),
    total_items integer,
    total_selling_price numeric not null,
    total_paid numeric not null,
    order_status_id uuid not null references order_status(id),
    created_at timestamptz not null default current_timestamp,
    updated_at timestamptz not null default current_timestamp
);


-- ORDER PRODUCT
create table order_product(
    id uuid primary key default gen_random_uuid(),
    order_id uuid not null references "order"(id),
    product_id uuid not null references product(id),
    quantity integer not null,
    unit_price numeric not null,
    total_selling_price numeric not null,
    total_buying_price numeric not null,
    created_at timestamptz not null default current_timestamp
);


-- PRODUCT IMAGE
create table product_image(
    id uuid primary key default gen_random_uuid(),
    product_id uuid not null references product(id),
    image text not null,
    is_default boolean default false,
    created_at timestamptz not null default current_timestamp,
    updated_at timestamptz not null default current_timestamp
);
