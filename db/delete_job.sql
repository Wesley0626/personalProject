delete from get_jobs
where id = $1;

select * from get_jobs
where user_id=$2