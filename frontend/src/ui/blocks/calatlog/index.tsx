import { useEffect, useState } from 'react';
import style from './style.module.css'
import type { Tabs } from './types';
import { Button } from '../../components/Button';
import { tabs } from '../../pages/catalog/data';
export const CatalogBlock:React.FC = ()=>
{

    const [
        tab,setTab
    ] = useState<Tabs>('info');
    const [status,setStatus]=useState<string>('пусто');
    const [polename,setPoleName]=useState<string>("введите имя");
    useEffect(()=>{setStatus('страница')},[])

    useEffect(()=>{setStatus(`поменялся ${tab}`)},[tab])
    return(
        <main>
            <h3>{polename}</h3>
            <input 
            
            onChange={(e)=>setPoleName(e.target.value)}
            type="text" 
            onKeyDown={(e)=>{
                if(e.code=='Enter') {
                    setStatus('создание жижи ')
                    
                }
            }}/>
            <div className='flex gap-4'>
             {tabs.map((data) => (
            <Button
                key={data.type}
                label={data.label}
                mode={tab === data.type ? 'primary' : 'secondary'}
                onClick={() => setTab(data.type)}
            />
            ))}

            </div>
            <div>
            {tab==='info' &&(
                <h2>Информация</h2>
            )}
            {tab==='history' &&(
                <h2>История</h2>
            )}
            {tab==="contacts" &&(
                <h2>контакты</h2>
            )}
            <h2>статус: {status}</h2>
            </div>
            <h3></h3>
        </main>
    );
}