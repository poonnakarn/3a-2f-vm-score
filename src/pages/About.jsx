function About() {
  return (
    <>
      <div className='mb-4'>
        <h1 className='text-4xl mb-4'>About 2A-2F-VM Score</h1>
        <div className='mb-4 text-lg font-light'>
          <p>A (ADHD; Attention Deficit Hyperactivity Disorder): +2 pt</p>
          <p>A (Antidepressant use): -2 pt</p>
          <p>A (ASD started after the first unprovoked seizure): -1 pt</p>
          <p>F (Family history of epilepsy): +2 pt</p>
          <p>
            F (Focal aware seizure as a seizure type of the first unprovoked
            seizure): +1 pt
          </p>
          <p>V (Valvular heart disease): +2 pt</p>
          <p>M (Microbleeds on MRI): +1 pt</p>
        </div>
        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
      </div>
      <div className='mb-4'>
        <h1 className='text-4xl mb-4'>Clinical Use</h1>
        <p className='mb-4 text-lg font-light'>
          This score can be used to assist physicians individually assess the
          first episode seizure patient’s risk of recurrence. Based on our
          prediction model, we recommend that the high-risk FS patients should
          be compulsory avoided from driving for at least 12 months
        </p>
      </div>
      <div className='mb-4'>
        <h1 className='text-4xl mb-4'>References</h1>
        <ol className='px-4 text-lg font-light list-decimal'>
          <li>
            Soongswang et al. (2021), Drive or Not Drive: 3A-2F-VM App for
            Determination of Seizure Risk
          </li>
        </ol>
      </div>
    </>
  )
}

export default About
