import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { supabase } from '@/supabaseClient';

export default () => {

  const [sessions, setSessions] = useState<any[]>([]);

  const getSessions = async () => {
    const {data} = await supabase.from("sessions").select();

    if (!data) return

    setSessions(data);
  }

  useEffect(() => {
    getSessions();
  }, [])

  return (
    <div>
      <p>index.tsx</p>
      {JSON.stringify(sessions)}
      <Link to="/about">About</Link>
      <Link to="/about/1">About 1</Link>
      <Link to="/about/2">About 2</Link>
    </div>
  )
}