import { Link } from 'react-router-dom'
import { selectAuthState, updateProfileAction } from '../redux-toolkit/auth/auth-slice'
import { useAppDispatch, useAppSelector } from '../redux-toolkit/hooks'

export default function AboutPage() {
  const {email,profile} = useAppSelector(selectAuthState) //ดึง authState มาใช้
  const dispatch = useAppDispatch();
  const updateProfile = () => {
    dispatch(updateProfileAction())
  }

  return (
    <>
        <h1>About Page</h1>
        <p>Hi {profile}</p>
        <p>Email {email}</p>
        <button style={{padding:"20px 25px"}}>
            <Link to = {'/'} replace={true}>Go back</Link>
        </button>
        <button style={{padding:"20px 25px"}} onClick={updateProfile}>
            Update Profile
        </button>
    </>
  )
}

