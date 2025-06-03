import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px',
  padding: theme.spacing(2),
  boxShadow: `
    rgba(0, 0, 0, 0.05) 0px 6px 12px,
    rgba(0, 0, 0, 0.04) 0px 3px 6px
  `,
  background: theme.palette.background.paper,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `
      rgba(0, 0, 0, 0.1) 0px 10px 20px,
      rgba(0, 0, 0, 0.06) 0px 6px 12px
    `,
  },
}));

export default CustomCard;
