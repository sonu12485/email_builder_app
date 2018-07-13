// clears all auth tokens and logs out a user

export default function logout()
{
    localStorage.clear();
    window.location.assign('/');
}