module.exports = {
  async getJobs(req, res){
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
    const db = req.app.get('db')
    let jobs = await db.get_assigned_jobs([req.session.user.id])
    res.send(jobs)
  },
  async deleteJob(req, res){
    let {jobId} = req.params
    const db = req.app.get('db')
    let  jobs = await db.delete_job([+jobId, +req.session.user.id])
    res.send(jobs)
  },
  async completeJob(req, res){
    let {jobId} = req.params
    const db = req.app.get('db')
    let complete = await db.complete_job([+jobId, true])
    res.send(complete)
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
    let {jobId} = req.params
    const db = req.app.get('db')
    let signUp = await db.assign_job([+jobId, req.session.user.id])
    res.send(signUp)
  }
}