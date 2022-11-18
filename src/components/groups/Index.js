import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DataService from '../../services/DataService'

export const Index = () => {

    const [partidos, setPartidos] = useState([])
    const [page, setPage] = useState('C'); 

    const api = async (params) => {
        console.log(paramsWQWEf `qS S`)
        DataService.getPartidos(params)
        .then(response => {
            setPartidos(response.data)
            console.log(response);
        });
    }

    useEffect(() => {

        const params = getRequestParams(page)
        
        api(params)
    }, [])

    function getRequestParams(page) {
        let params = {};
    
        if (page) {
          params["page"] = page;
        }
    
        // if (pageSize) {
        //   params["size"] = pageSize;
        // }
    
        return params;
    }
    
    
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableCell>#</TableCell>
                    <TableCell>Fechas</TableCell>
                    <TableCell>Horas</TableCell>
                    <TableCell>Partidos</TableCell>
                    <TableCell>Estadios</TableCell>
                    <TableCell>Fechas</TableCell>
                </TableHead>
                <TableBody>
                    {partidos.map((partido) => {
                        return (
                            <TableRow>
                                <TableCell>{ partido.fecha }</TableCell>
                                <TableCell>{ partido.horario }</TableCell>
                                <TableCell>{ partido.equipo1_nombre }</TableCell>
                                <TableCell>{ partido.equipo2_nombre }</TableCell>
                                <TableCell>{ partido.estadio }</TableCell>
                            </TableRow>
                        )
                        
                    })}
                    
                </TableBody>             
            </Table>
        </TableContainer>
    </div>
  )
}
