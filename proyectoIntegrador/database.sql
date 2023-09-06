DROP SCHEMA proyecto;
CREATE SCHEMA proyecto; 
USE proyecto;

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(300) NOT NULL,
clave VARCHAR(100) NOT NULL,
fotoDePerfil VARCHAR (500),
fecha DATE,
dni INT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

CREATE TABLE posteos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idUsuario INT UNSIGNED, 
imagenPerfil VARCHAR(500),
descripcionPost VARCHAR(900),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL,
FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idPost INT UNSIGNED,
idUsuario INT UNSIGNED,
comentario VARCHAR (1000),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL,
FOREIGN KEY (idPost) REFERENCES posteos(id),
FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

USE proyecto;
INSERT INTO usuarios (id, email, clave, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 'anagarcia@email.com', 'incorrecta', 'https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200008/91087328-icono-de-perfil-de-avatar-predeterminado-para-mujer-marcador-de-posici%C3%B3n-de-foto-gris-vector-de.jpg', '2003-08-14', 44369412, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios (id, email, clave, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 'lauramartinez@email.com', 'incorrecta', 'https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200008/91087328-icono-de-perfil-de-avatar-predeterminado-para-mujer-marcador-de-posici%C3%B3n-de-foto-gris-vector-de.jpg', '2003-10-14', 44369212, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios (id, email, clave, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 'dolorespedrozousuarios@email.com', 'incorrecta', 'https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200008/91087328-icono-de-perfil-de-avatar-predeterminado-para-mujer-marcador-de-posici%C3%B3n-de-foto-gris-vector-de.jpg', '2003-07-14', 44366412, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios (id, email, clave, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 'rominagimenez@email.com', 'incorrecta', 'https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200008/91087328-icono-de-perfil-de-avatar-predeterminado-para-mujer-marcador-de-posici%C3%B3n-de-foto-gris-vector-de.jpg', '2003-04-14', 44169412, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios (id, email, clave, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 'soledadrios@email.com', 'incorrecta', 'https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200008/91087328-icono-de-perfil-de-avatar-predeterminado-para-mujer-marcador-de-posici%C3%B3n-de-foto-gris-vector-de.jpg', '2003-05-14', 42369412, DEFAULT, DEFAULT, DEFAULT);

USE proyecto;
INSERT INTO posteos (id, idUsuario, imagenPerfil, descripcionPost, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 2, 'https://media-cdn.tripadvisor.com/media/photo-s/1a/5e/e0/e0/londres-bella-y-espectacular.jpg', 'Hermoso lugar, espero volver pronto', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos (id, idUsuario, imagenPerfil, descripcionPost, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 1, 'https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbGl8ZW58MHx8MHx8fDA%3D&w=1000&q=80', 'El lugar indicado para descansar y disfrutar', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos (id, idUsuario, imagenPerfil, descripcionPost, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 3, 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/NJDJYFIMIVJVRELG6XDL6KCUZI.jpg', 'Una ciudad llena de magia', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos (id, idUsuario, imagenPerfil, descripcionPost, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 4, 'https://media.istockphoto.com/id/1145450965/es/foto/isla-de-santorini-grecia.jpg?s=612x612&w=0&k=20&c=hlhoRMTnz1aURQUzNx5wKYg1jnWYcbPjv3cjpvmnCBo=', 'Ideal para una escapada de fin de semana', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos (id, idUsuario, imagenPerfil, descripcionPost, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 5,'https://a.cdn-hotels.com/gdcs/production163/d1338/2c6deb71-c305-4c1b-a7f7-505f127da244.jpg', 'LLeno de tradiciones y mistica', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos (id, idUsuario, imagenPerfil, descripcionPost, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 2,'https://www.nuevatribuna.es/media/nuevatribuna/images/2018/11/19//2018111912351384823.jpg', 'Los mejores paisajes de tu vida', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos (id, idUsuario, imagenPerfil, descripcionPost, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 3,'https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2021/12/1140-oahu-hero-esp.jpg', 'Momento soñado', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos (id, idUsuario, imagenPerfil, descripcionPost, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 1,'https://estaticos-cdn.prensaiberica.es/clip/8d0cf829-3c66-4191-a454-94e3585c6284_alta-aspect-ratio_default_0.jpg', 'Una cultura totalmente diferente', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos (id, idUsuario, imagenPerfil, descripcionPost, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 4,'https://www.turismonuevayork.com/wp-content/uploads/2014/09/Times-Square-Nueva-York-1024x685.jpg', 'La ciudad que nunca duerme', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO posteos (id, idUsuario, imagenPerfil, descripcionPost, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 5,'https://gostudyaus.es/wp-content/uploads/2018/09/SYD_header.jpg', 'Siempre algo nuevo que explorar', DEFAULT, DEFAULT, DEFAULT);


USE proyecto;
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 1, 1, 'Lindas fotos', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 1, 3, 'Espero ir pronto', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 1, 4, 'Londres siempre maravillosa', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 1, 5, 'Necesito ir ya', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 2, 2, 'Tremendas fotos', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 2, 3, 'Excelente lugar para visitar', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 2, 4, 'Disfruta mucho', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 2, 5, 'Estoy para organizar una escapa en ese bello lugar', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 3, 1, 'Ya tengo destino para mis vacaciones', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 3, 2, 'Necesito recomendaciones de actividades', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 3, 4, 'Digno de una serie esos paisajes', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 3, 5, 'Parece que es el mundo de Harry Potter', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 4, 1, 'Como salido de una película', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 4, 3, 'Divertite mucho', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 4, 2, 'Espero ver más fotos', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 4, 5, 'Maravillosa experiencia', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 5, 1, 'Alemania nunca decepciona', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 5, 3, 'Las fotos reflejan se amplia cultura', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 5, 4, 'Es antiguo y actual a la vez', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 5, 2, 'Pasala muy bien', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 6, 1, 'Quiero estar ahí', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 6, 3, 'Saca muchas fotos', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 6, 4, 'Demasiado lindos esos lugares', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 6, 5, 'Tantas cosas para visitar y apreciar', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 7, 1, 'Especial para descansar', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 7, 2, 'Destino ideal para unas vacaciones', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 7, 4, 'Me quedo para siempre', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 7, 5, 'Simplemente soñado', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 8, 3, 'Proba mucha comida coreana', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 8, 2, 'Igual que un kdrama', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 8, 4, 'Todo muy tradicional', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 8, 5, 'Que hermosas son las flores de cerezo', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 9, 3, 'Que cantidad de pantallas', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 9, 2, 'Agobia un poco tanta gente jajaja', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 9, 1, 'Deslumbrante', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 9, 5, 'Quiero ir', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 10, 3, 'Se ve muy linda la ciudad', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 10, 2, 'Un lugar muy divertido', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 10, 1, 'Saca muchas fotos', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 10, 4, 'Tenes que visitar el mirador, tiene las mejores vistas a la ciudad', DEFAULT, DEFAULT, DEFAULT);





