import { z } from 'zod'

export const userSchema = z.object({

    nombre: z.string().regex(new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/)),

    apellido: z.string().regex(new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/)),

  

    documento_identidad: z.string().min(7).regex(new RegExp(/^[0-9]+$/)),

    contacto: z.string().min(11).max(11).regex(new RegExp(/^[0-9]+$/)),

    // fechaNacimiento: z.date().min(new Date("2005-01-01")),

    email: z.string().email(),

    direccion: z.string().min(3, {
        message: 'name no furula'
    }).max(200, { message: 'muy largo papi' }),
})