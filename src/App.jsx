// src/App.jsx

import { CssBaseline, Container, Typography } from "@mui/material";
import DragDropList from "./components/DragDropList";

const App = () => {
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h4" component="h1" gutterBottom>
        Drag and Drop List
      </Typography>
      <DragDropList />
    </Container>
  );
};

export default App;
