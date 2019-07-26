insert into users(username, password, email, phone, first_name, last_name, requester, doer)
values($1, $2, $3, $4, $5, $6, $7, $8)
returning *;