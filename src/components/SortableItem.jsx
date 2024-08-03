// src/components/SortableItem.jsx

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ListItem, ListItemText, Paper } from "@mui/material";

// eslint-disable-next-line react/prop-types
const SortableItem = ({ id, content }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <ListItem ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Paper style={{ width: "100%" }}>
        <ListItemText primary={content} />
      </Paper>
    </ListItem>
  );
};

export default SortableItem;
