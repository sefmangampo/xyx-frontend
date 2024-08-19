type ReasonCardParams = {
  icon: string
  title: string
  details: string
}

function ReasonCard(data: ReasonCardParams) {
  return (
    <>
      <img src={data.icon} alt={data.title} />
      <div>{data.title}</div>
      <div>{data.details}</div>
    </>
  )
}

export default ReasonCard
