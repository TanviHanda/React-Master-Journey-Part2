const Eventhandling = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Button clicked',e.currentTarget);
        
    }
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('Mouse entered! ',e.currentTarget);
        
    }
  return (
    <div onMouseEnter={handleMouseEnter}>
        <h2>Event Handling Example</h2>
        <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Eventhandling