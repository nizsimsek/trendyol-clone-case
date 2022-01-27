import { useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import { useDispatch } from "react-redux";

import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Topbar from "./components/Topbar";
import { fetchItemData } from "./store/item-actions";
import { fetchCategoriesData } from "./store/categories-actions";
import { grey } from "@mui/material/colors";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemData());
    dispatch(fetchCategoriesData());
  }, [dispatch]);

  return (
    <Box sx={{ backgroundColor: grey[200] }}>
      <Container fixed maxWidth="l">
        <Grid container>
          <Grid item xs={12} mb={4}>
            <Topbar />
          </Grid>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10} px={3} py={3}>
            <Content />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
