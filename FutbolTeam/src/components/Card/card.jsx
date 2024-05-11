import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

export default function MediaCard({
  id,
  nombre,
  imagen,
  numero,
  rating,
  resena,
  logros,
}) {
    const imageSrc = imagen ? imagen : 'https://hips.hearstapps.com/hmg-prod/images/muere-maradona-1606326764.jpg?crop=0.845xw:1.00xh;0.0783xw,0&resize=640:*';
   
    const handleClick = () => {
      navigate(`/detail/${props.id}`);
    };

  return (
    <Card onClick={handleClick} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{height: 0, paddingTop: '100%', position: 'relative'}}
        image={imageSrc} // Aquí usamos la prop imagen que pasamos al componente
        title={nombre} // Usamos el nombre del jugador como título de la imagen
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {numero} - {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {resena}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Logros: {logros.join(", ")}
        </Typography>
      </CardContent>
      <CardActions>
        <Rating name="read-only" value={rating} readOnly />
        {/* <Typography variant="body2" color="text.secondary">
          Rating: {rating}
        </Typography> */}
        <Button size="small">Añadir Valoracion</Button>
      </CardActions>
    </Card>
  );
}
