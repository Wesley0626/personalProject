update jobs 
set task = $2, category = $3, size = $4, tools = $5, finish_hour = $6, finish_minute = $7, am_or_pm = $8, finish_day = $9, finish_month = $10, payout = $11
where job_id = $1;

select * from jobs 
where user_id = $12;