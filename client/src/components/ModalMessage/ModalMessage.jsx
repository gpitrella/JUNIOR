import React from 'react';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { closeMessageMustLogin } from '../../redux/actions/generalActions';
import { useNavigate } from "react-router-dom";
import './ModalMessage.css';

export default function ModalMessage({ message }) {
    // Cartel desplegable de Login
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { mustLoginMessage } = useSelector((state) => state.homepageReducer);

  
    const handleCloseLogin = () => {
        dispatch(closeMessageMustLogin());
    };

    const handleOpenPageLogin = () => {
        navigate('/login');
    }

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
    }));

    const BootstrapDialogTitle = (props) => {
        const { children, onClose, ...other } = props;
      
        return (
          <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>
        );
      };
      
      BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
      };

    return (
        <BootstrapDialog
            sx={{ borderRadius: '15px' }}
            onClose={handleCloseLogin}
            aria-labelledby="customized-dialog-title"
            open={mustLoginMessage.open}
        >
            <BootstrapDialogTitle onClose={handleCloseLogin}>
                Logeo / Registro:
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    { mustLoginMessage.msg === 1 ? message.createProject : message.colaborateProject }
                </Typography>
            </DialogContent>
            <DialogActions>
                <button className="btnLogin" type="button" onClick={handleOpenPageLogin}>
                    LogIn
                </button>
            </DialogActions>
        </BootstrapDialog>
    )
};