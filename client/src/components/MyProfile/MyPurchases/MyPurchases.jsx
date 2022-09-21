import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { postReviewProduct } from "../../../redux/actions";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { getOrderByUser, getUserReviews } from '../../../redux/actions';
import { visuallyHidden } from '@mui/utils';
import { useSelector } from "react-redux";
import Rating from '@mui/material/Rating';
import './MyPurchases.css'

// Alerta comentario creado
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis?.map((el) => el[0]);
}

const headCells = [
  {
    id: 'order',
    numeric: false,
    disablePadding: true,
    label: 'N° Order', // antes Dessert (100g serving)
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Product Name', // antes Dessert (100g serving)
  },
  {
    id: 'quantity', // antes calories
    numeric: true,
    disablePadding: false,
    label: 'Quantity', // antes Calories
  },
  {
    id: 'price', // antes fat
    numeric: true,
    disablePadding: false,
    label: 'Price', // antes Fat (g)
  },
  {
    id: 'status', // antes carbs
    numeric: true,
    disablePadding: false,
    label: 'Status', // antes Carbs (g)
  },
  {
    id: 'review',
    numeric: true,
    disablePadding: false,
    label: 'Write Review',
  },
  {
    id: 'detail',
    numeric: true,
    disablePadding: false,
    label: 'See Purchase Detail',
  }
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Your Purchases Detail 
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function MyReviews() {
  const [ totalOrderByUser, setTotalOrderByUser ] = React.useState([]);
  const [ openReview, setOpenReview ] = React.useState(false); // Box de review
  const [ openComment, setOpenComment ] = React.useState(false);
  const [ commentReview, setCommentReview ] = React.useState();
  const { user } = useSelector((state) => state.general)
  const [ writeReview, setWriteReview ] = React.useState({});
  const { orderByUser } = useSelector((state) => state.general)
  const { userReviews } = useSelector((state) => state.userReducer)
  const [ value, setValue ] = React.useState(0); // Rating
  const [ idToReview, setIdToReview ] = React.useState()
  const dispatch = useDispatch();
    
  const totalOrder = () => {
    let totalOrder = [];
    if(orderByUser?.purchase_orders?.length > 0) {
      orderByUser.purchase_orders.map((order)=>{
        order.items.map((item)=>{
          totalOrder.push({
            idPurchase: order.id,
            status: order.status, 
            id: item.id,
            title: item.title,
            picture_url: item.picture_url,
            category_id: item.category_id,
            quantity: item.quantity,
            unit_price: item.unit_price,
            withReview: false
          })          
        })
      })
    }
    setTotalOrderByUser(totalOrder);
  };
  let data = {status: {}}
  
  const countReview = (idProduct) => {
    const numberOfReview = userReviews.filter((review) => review.products[0].id === idProduct)
    const numberOfPurchaseByProduct = totalOrderByUser.filter((order) => order.id === idProduct)
    const numberOfPurchase = numberOfPurchaseByProduct.filter((order) => order.status === "filled")
    if(numberOfReview < numberOfPurchase) {
       data.status = {
        ...data.status, 
        [idProduct]: true
      };
    }
  }
  

  const rows = totalOrderByUser;
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(()=>{
    dispatch(getOrderByUser(user?.user.id));
  },[userReviews])

  React.useEffect(()=>{
    totalOrder()
  },[orderByUser]);

  React.useEffect(()=>{
     totalOrderByUser.map((order) => {
        countReview(order.id)   
      })
      setWriteReview(data)
  },[totalOrderByUser]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // Agrega una Review
  const handleClickOpenReview = (id) => {
    if(user?.user){
      setOpenReview(true);
      setIdToReview(id)
    } 
  };

  const handleCloseReview = () => {
    setOpenReview(false);
  };

  const handleCommentReview = (e) => {
    e.preventDefault();
    setCommentReview(e.target.value);
};

const handleSendReview = () => {
  if(user?.user){
    dispatch(postReviewProduct(commentReview, value, idToReview, user?.user.id));
    // dispatch(getUserReviews(user?.user.id))
    handleClickComment()
    handleCloseReview();
  } 
};

const handleClickComment = () => {
  setOpenComment(true);
};

const handleCloseSuccessComment = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpenComment(false);
};



  return (
    <div className='main_box_myreviews'>
    <h3 className='title_myreviews'> My Purchases </h3>
    {rows?.length === 0 
        ? <h3 className='title_myreviews_profile'> Don't have purchases yet.</h3>
        :<Box sx={{ width: '100%' }} id='box_table_myreviews'>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows?.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.id}
                    >
                      
                      <TableCell padding="checkbox">
                        <Stack direction="row" spacing={2}>
                          <Avatar id="avatar_product_review"
                              alt="Remy Sharp"
                              src={row.picture_url}
                              sx={{ width: 56, height: 56 }}                           
                              />                        
                        </Stack>
                      </TableCell>
                      <TableCell align="center">{row.idPurchase}</TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        <Link to={`/productdetails/${row.id}`}>{row.title} </Link>
                      </TableCell>
                      <TableCell align="center">{row.quantity}</TableCell>
                      <TableCell align="center">{row.unit_price}</TableCell>
                      <TableCell align="center">{row.status.charAt(0).toUpperCase() + row.status.slice(1)}</TableCell>
                      <TableCell align="center"> {writeReview?.status[row.id] 
                           ? <Button size='small' variant="outlined" onClick={() => handleClickOpenReview(row.id)}>
                                Review {console.log(writeReview)}
                              </Button> 
                           : row.status !== 'filled'
                                  ? '---'
                                  : 'Done' } 
                      </TableCell>
                      <TableCell align="center"><Link to={`/myprofile/mypurchases/details/${row.idPurchase}`}>See Detail</Link></TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>}
    <Link to={`/myprofile`}>
        <Button id='btn_myreview' variant="contained"> My Profile </Button>
    </Link>
    <div id="review_block">
            <Dialog open={openReview} onClose={handleCloseReview}>
                <DialogTitle>Review:</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Write a review of the product you bought so you help other buyers in their decision.
                    </DialogContentText>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                        >
                        <Typography component="legend">Review Rating</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        />
                    </Box>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="comment"
                        label="Write here your review ..."
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e)=> handleCommentReview(e)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseReview}>Cancel</Button>
                    <Button onClick={handleSendReview}>Send Review</Button>
                </DialogActions>
            </Dialog>
        </div>
        <Snackbar open={openComment} autoHideDuration={6000} onClose={handleCloseSuccessComment}>
            <Alert onClose={handleCloseSuccessComment} severity="success" sx={{ width: '100%' }}>
                Success review created!
            </Alert>
        </Snackbar>
    </div>
  );
}
