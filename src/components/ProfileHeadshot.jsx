import Headshot from "../assets/JohnDennisHeadshot.jpg"
export default function ProfileHeadshot(){
    return (
        <img className='rounded-full' src={Headshot} alt="Profile headshot" />
    )
}