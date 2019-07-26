module.exports = {
  async getJobs(req, res){
    console.log('get hit')
    let {userId } = req.params
    const db = req.app.get('db')
    let jobs = await db.get_jobs(+userId)
    res.send(jobs)
  },
  async getJobsByUser(req, res){
    const db = req.app.get('db')
    let jobs = await db.get_jobs_by_user(+req.session.user.id)
    res.send(jobs)
  },
  async getAssignedJobs(req, res){
    console.log('assigned', req.session.user.id)
    const db = req.app.get('db')
    let jobs = await db.get_assigned_jobs([req.session.user.id])
    res.send(jobs)
  },
  async deleteJob(req, res){
    let {jobId} = req.params
    console.log('jobs', jobId)
    const db = req.app.get('db')
    let  jobs = await db.delete_job([+jobId, +req.session.user.id])
    res.send(jobs)
  },
  async editJob(req, res){
    let {jobId} = req.params
    let{newTask, newCategory, newSize, newTools, newFinishHour, newFinishMinute, newAmOrPm, newFinishDay, newFinishMonth, newPayout } = req.body
    const db = req.app.get('db')
    let jobs = await db.edit_job([
      +jobId,
      newTask,
      newCategory,
      newSize,
      newTools,
      newFinishHour,
      newFinishMinute,
      newAmOrPm,
      newFinishDay, 
      newFinishMonth,
      newPayout,
      req.session.user.id
    ])
    res.send(jobs)
  },
  async saveJob(req, res){
    let {task, category, size, tools, finishHour, finishMinute, amOrPm, finishDay, finishMonth, payout} = req.body
    const db = req.app.get('db')
    let jobs = await db.save_jobs([task, category, size, tools, +finishHour, +finishMinute, amOrPm, +finishDay, finishMonth, +payout, req.session.user.id])
    res.send(jobs)
  },
  async assignJob(req, res){
    console.log("id's", req.params)
    let {jobId} = req.params
    const db = req.app.get('db')
    let signUp = await db.assign_job([+jobId, req.session.user.id])
    res.send(signUp)
  }
}