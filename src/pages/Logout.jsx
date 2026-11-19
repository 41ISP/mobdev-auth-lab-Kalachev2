import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/useUserStore'

export default function Logout() {
    const navigate = useNavigate()
    const clearSession = useUserStore((state) => state.clearSession)

    useEffect(() => {
        clearSession()
        navigate('/')
    }, [])

    return null
}