insert into jobs(task, category, size, tools, finish_hour, finish_minute, am_or_pm, finish_day, finish_month, payout, user_id)
values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);

select * from jobs
where user_id = $11;