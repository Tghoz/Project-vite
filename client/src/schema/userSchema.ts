import { z } from 'zod'

export const userSchema = z.object({

    nombre: z.string().regex(new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/)),
    apellido: z.string().regex(new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/)),
    documento_identidad: z.string().min(7).regex(new RegExp(/^[0-9]+$/)),
    contacto: z.string().min(11).max(11).regex(new RegExp(/^[0-9]+$/)),
    genero: z.string(),
    direccion: z.string()


})