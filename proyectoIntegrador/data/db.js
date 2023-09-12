const data = { 
    usuario: {
        id:1,
        nombre: 'Ana',
        apellido: 'Garcia',
        email:'anagarcia@email.com',
        fechaDeNacimiento: '2003-08-14',
        fotodePerfil: '/img/imagenUsuario.jpeg',
        clave: 'incorrecta'
    },
    posteos: [
        {
        id: 1,
        idUsuario: 2,
        imagenPosteo: '/img/londres.jpeg' ,
        descripcionPost: 'Hermoso lugar, espero volver pronto',
        comentarios: [
            {     
                usuario: 'Tomas Perez', 
                comentario: 'Lindas fotos'},
            {     
                usuario: 'Victoria Portillo', 
                comentario:'Espero ir pronto'},
            {     
                usuario: 'Sofia Gimenez', 
                comentario:'Londres siempre maravillosa'},
            {     
                usuario: 'Annia Funes', 
                comentario:'Necesito ir ya'}
        
        ]
    },
    {
        id: 2,
        idUsuario: 1,
        imagenPosteo: '/img/asia.jpeg' ,
        descripcionPost: 'El lugar indicado para descansar y disfrutar',
        comentarios: [
            {     
                usuario: 'Pedro Cozzarin', 
                comentario: 'Tremendas fotos'},
            {     
                usuario: 'Angelica Funes', 
                comentario:'Excelente lugar para visitar'},
            {     
                usuario: 'Sol Gimenez', 
                comentario:'Disfruta mucho'},
            {     
                usuario: 'Selena Gomez', 
                comentario:'Estoy para organizar una escapa en ese bello lugar'}
        
        ]
    },
    {
        id: 3,
        idUsuario: 3,
        imagenPosteo: '/img/europa.jpeg'  ,
        descripcionPost: 'Una ciudad llena de magia',
        comentarios: [
            {     
                usuario: 'Justin Biber', 
                comentario: 'Ya tengo destino para mis vacaciones'},
            {     
                usuario: 'Harry Styles', 
                comentario:'Necesito recomendaciones de actividades'},
            {     
                usuario: 'Ruben Garcia', 
                comentario:'Digno de una serie esos paisajes'},
            {     
                usuario: 'Belen Diaz', 
                comentario:'Parece que es el mundo de Harry Potter'}
        
        ]
    },
    {
        id: 4,
        idUsuario: 4,
        imagenPosteo:'/img/grecia.jpeg',
        descripcionPost: 'Ideal para una escapada de fin de semana' ,
        comentarios: [
            {     
                usuario: 'Jason Derulo', 
                comentario: 'Como salido de una película'},
            {     
                usuario: 'Abby Mendes', 
                comentario:'Divertite mucho'},
            {     
                usuario: 'Sofia Sanchez', 
                comentario:'Espero ver más fotos'},
            {     
                usuario: 'Carlos Pineyro', 
                comentario:'Maravillosa experiencia'}
        
        ]
    },
    {
        id: 5,
        idUsuario: 5,
        imagenPosteo: '/img/berlin.jpeg', 
        descripcionPost: 'LLeno de tradiciones y mistica' ,
        comentarios: [
            {     
                usuario: 'Ana Martínez', 
                comentario: 'Alemania nunca decepciona'},
            {     
                usuario: 'Gabriel Sanchez', 
                comentario:'Las fotos reflejan se amplia cultura'},
            {     
                usuario: 'Sofía Ramírez', 
                comentario:'Es antiguo y actual a la vez'},
            {     
                usuario: 'Luis Vargas', 
                comentario:'Pasala muy bien'}
        
        ]
    },
    {
        id: 6,
        idUsuario: 2,
        imagenPosteo: '/img/alemania.jpeg', 
        descripcionPost: 'Los mejores paisajes de tu vida',
        comentarios: [
            {     
                usuario: 'Miguel Ángel Pérez', 
                comentario: 'Quiero estar ahí'},
            {     
                usuario: 'Carolina Mendoza', 
                comentario:'Saca muchas fotos'},
            {     
                usuario: 'Eduardo Ríos', 
                comentario:'Demasiado lindos esos lugares'},
            {     
                usuario: 'Andrea Castro', 
                comentario:'Tantas cosas para visitar y apreciar'}
        
        ]
    },
    {
        id: 7,
        idUsuario: 3,
        imagenPosteo: '/img/playita.jpeg', 
        descripcionPost: 'Momento soñado',
        comentarios: [
            {     
                usuario: 'Raúl Flores', 
                comentario: 'Especial para descansar'},
            {     
                usuario: 'Patricia Ortega', 
                comentario:'Destino ideal para unas vacaciones'},
            {     
                usuario: 'Mario Silva', 
                comentario:'Me quedo para siempre'},
            {     
                usuario: 'Claudia Paredes', 
                comentario:'Simplemente soñado'}
        
        ]
    },
    {
        id: 8,
        idUsuario: 1,
        imagenPosteo: '/img/japon.jpeg', 
        descripcionPost: 'Una cultura totalmente diferente' ,
        comentarios: [
            {     
                usuario: 'Felipe Cruz', 
                comentario: 'Proba mucha comida coreana'},
            {     
                usuario: 'María Jiménez', 
                comentario:'Igual que un kdrama'},
            {     
                usuario: 'Antonio González', 
                comentario:'Todo muy tradicional'},
            {     
                usuario: 'Natalia López', 
                comentario:'Que hermosas son las flores de cerezo'}
        
        ]
    },
    {
        id: 9,
        idUsuario: 4,
        imagenPosteo: '/img/nuevaYork.jpeg' ,
        descripcionPost:'La ciudad que nunca duerme',
        comentarios: [
            {     
                usuario: 'Daniel Ruiz', 
                comentario: 'Que cantidad de pantallas'},
            {     
                usuario: 'Laura Rodríguez', 
                comentario:'Agobia un poco tanta gente jajaja'},
            {     
                usuario: 'Javier Morales', 
                comentario:'Deslumbrante'},
            {     
                usuario: 'Isabel Pérez', 
                comentario:'Quiero ir'}
        
        ]
    },
    {
        id: 10,
        idUsuario: 5,
        imagenPosteo: '/img/canada.jpeg', 
        descripcionPost: 'Siempre algo nuevo que explorar',
        comentarios: [
            {     
                usuario: 'Ernesto Herrera', 
                comentario: 'Se ve muy linda la ciudad'},
            {     
                usuario: 'Gabriela Sánchez', 
                comentario:'Un lugar muy divertido'},
            {     
                usuario: 'Juan Carlos Vargas', 
                comentario:'Saca muchas fotos'},
            {     
                usuario: 'Martín Ríos', 
                comentario:'Tenes que visitar el mirador, tiene las mejores vistas a la ciudad'}
        
        ]
    }

 ]}

 module.exports = data;
