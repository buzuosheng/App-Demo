import { useClock } from "./useclock";

const Clock = () => {
  // const time = useClock()
  const time = Date.now()
  return (
    <div>
      {time}
    </div>
  )
}

export default Clock