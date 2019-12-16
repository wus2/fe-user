import { container, title, divider } from '../material-kit-react';

const componentsStyle = {
  divider: {
    ...divider,
    width: '90%'
  },
  container,
  brand: {
    color: '#FFFFFF',
    textAlign: 'left'
  },
  title: {
    fontSize: '4.2rem',
    fontWeight: '600',
    display: 'inline-block',
    position: 'relative'
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px 0 0'
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  link: {
    textDecoration: 'none'
  },
  textCenter: {
    textAlign: 'center'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  skilltags: {
    background: '#e0e0e0',
    borderRadius: '4px',
    color: '#222',
    fontSize: '14px',
    display: 'inline-block',
    padding: '5px 8px',
    lineHeight: '1',
    margin: '2px 2px 2px 0',
    width: 'auto'
  },
  card: {
    maxWidth: 400
  },
  profile: {
    marginLeft: 'auto'
  },
  topic: {
    ...title,
    textDecoration: 'none',
    textAlign: 'center'
  }
};

export default componentsStyle;
