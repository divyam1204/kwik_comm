import { useEffect, useState } from 'react';
import Navbar from './Navbar';
// import '../styles/create.module.css';
import useWindowDimensions from './Width';
import NavMob from './NavbarMobile';
import { makeStyles } from '@mui/styles';

const styles = makeStyles({
	contCreate: {
		width: '100%',
		color: '#333333',
	},
	headerCreate: {
		display: 'flex',
		width: '95%',
		margin: 'auto',
		padding: '1rem 0',
		'& p': {
			margin: '0',
			display: 'flex',
			alignItems: 'center',
		},
	},
	btnCreate: {
		backgroundColor: '#366ef1',
		color: '#fff',
		border: 'none',
		borderRadius: '8px',
		height: '2rem',
		padding: '0 1rem',
		fontSize: '0.8rem',
		fontWeight: '600',
	},
	dropdownCreate: {
		position: 'absolute',
		width: '100%',
		height: '14rem',
		top: '105%',
		left: '0rem',
		borderRadius: '10px',
		padding: '0.5rem',
		backgroundColor: '#fff',
		boxShadow: '0px 26px 81px #33333350',
		zIndex: '100',
		'& button': {
			border: 'none',
			color: '#333333',
			backgroundColor: '#fff',
			padding: '0.2rem 0.5rem',
			borderRadius: '4px',
		},
	},
	scrollCreate: {
		height: '75%',
		overflowY: 'scroll',
		scrollbarWidth: 'thin',
		scrollbarColor: '#0670ed #004cff38',
		'& input': {
			display: 'none',
			'& :checked + label': {
				backgroundColor: '#eceef1',
			},
			'& :checked + label span:last-child': {
				opacity: 1,
			},
		},
		'& label': {
			fontSize: '1rem',
			padding: '0.3rem 0.2rem',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			fontWeight: '400',
			borderRadius: '4px',
			'& :hover': {
				backgroundColor: '#eceef1',
			},
			'& span:nth-child(2)': {
				opacity: 0,
			},
		},
	},
	bodyCreate: {
		width: '95%',
		margin: 'auto',
	},
	firstCreate: {
		width: '100%',
		padding: '1rem 3rem',
		backgroundColor: '#fff',
		borderRadius: '10px',
		'&:hover': {
			boxShadow: '0px 26px 81px #33333310',
		},
	},
	form1Create: {
		width: '70%',
		'@media (max-width:1200px)': {
			width: '80%',
		},
		'@media (max-width:1000px)': {
			width: '100%',
		},
	},
	secondCreate: {
		width: '100%',
		padding: '1rem 3rem',
		backgroundColor: '#fff',
		borderRadius: '10px',
		margin: '1.5rem 0',
		'&:hover': {
			boxShadow: '0px 26px 81px #33333310',
		},
	},
	form2Create: {
		width: '100%',
		display: 'flex',
		columnGap: '1rem',
		flexWrap: 'wrap',
	},
	textCreate: {
		minWidth: '10rem',
		flex: 1,
		minWidth: '15rem',
		margin: '1rem 0',
		'& label': {
			display: 'block',
			fontSize: '0.8rem',
            textAlign: 'left'
		},
		'& input': {
			display: 'block',
			height: '2rem',
			minWidth: '15rem',
			/* width: 100%; */
			border: '1px solid #33333350',
			outline: 'none',
			padding: '0.5rem',
			'& :hover': {
				border: '1px solid #33333380',
			},
			'& ::placeholder': {
				color: '#33333380',
			},
		},
	},
	submitCreate: {
		width: '100%',
		margin: '1.5rem 0',
		marginBottom: '3rem',
		display: 'flex',
		columnGap: '1rem',
		justifyContent: 'flex-end',
		'& button': {
			border: 'none',
			height: '2.5rem',
			fontSize: '1rem',
			padding: '0 1rem',
			borderRadius: '8px',
			backgroundColor: '#f4f4f9',
		},
	},
	form1DivCreate: {
		alignItems: 'center',
		justifyContent: 'space-between',
		columnGap: '0.5rem',
		display: 'flex',
		'@media (max-width:800px)': {
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'left',
			rowGap: '1rem',
			'& div': {
				width: '100%',
			},
		},
	},
	headerLeftCreate: {
		'@media (max-width:800px)': {
			flexDirection: 'column',
			rowGap: '0.5rem',
		},
	},
});

const AddWareHouse = () => {
	const classes = styles();
	const { height, width } = useWindowDimensions();
	const [role, setRole] = useState(false);
	const [who, setWho] = useState('Publisher');
	const [t1, sett1] = useState('');
	const [qty, setQty] = useState(0);
	const [prod, setprod] = useState('select');
	const [chooseProd, setChooseProd] = useState(false);
	const [ready, setReady] = useState(false);
	const [sameAdd, setSameAdd] = useState(false);
	const [name, setName] = useState('');
	const [email, setmail] = useState('');
	const [ph, setph] = useState('');
	const [add, setAdd] = useState('');
	const [ph2, setph2] = useState('');
	const [state, setState] = useState('');
	const [pin, setPin] = useState('');
	const [city, setCity] = useState('');
	const [name2, setName2] = useState('');
	const [email2, setmail2] = useState('');
	const [ph_2, setph_2] = useState('');
	const [add2, setAdd2] = useState('');
	const [ph22, setph22] = useState('');
	const [state2, setState2] = useState('');
	const [pin2, setPin2] = useState('');
	const [city2, setCity2] = useState('');

	const checkAdd = () => {
		var check = document.getElementById('sameAddress');
		console.log(check);
		if (check.checked) {
			setSameAdd(true);
		} else {
			setSameAdd(false);
		}
	};

	useEffect(() => {
		setReady(true);
	}, []);

	return (
		<div className={classes.contCreate}>
			{ready && width >= 800 && <Navbar />}
			{ready && width < 800 && <NavMob width={width} />}
			<div className={classes.headerCreate}>
				<p
					style={{
						fontSize: '2.5rem',
						fontWeight: '600',
						color: '#333333',
						flex: 1,
					}}
				>
					Add Warehouse
				</p>
			</div>
			<div className={classes.bodyCreate}>
				<div className={classes.firstCreate}>
					<p
						style={{ display: 'flex', columnGap: '1rem', alignItems: 'center' }}
					>
						<span
							style={{
								borderRadius: '50%',
								backgroundColor: '#366EF1',
								padding: '0.2rem 0',
								color: '#fff',
								display: 'inline-block',
								width: '1.7rem',
								height: '1.7rem',
								textAlign: 'center',
							}}
						>
							1
						</span>
						<span style={{ fontSize: '1.4rem', fontWeight: '600' }}>
							Warehouse Details
						</span>
					</p>
					<div>
                    <div className={classes.form2Create}>
						<div className={classes.textCreate}>
							<label htmlFor='name'>Title</label>
							<input
								type='text'
								name='name'
								id='name'
								placeholder='Eg. John Doe'
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className={classes.textCreate}>
							<label htmlFor='mail'>Company</label>
							<input
								type='email'
								name='mail'
								id='mail'
								placeholder='john_Doe@gmail.com'
								onChange={(e) => setmail(e.target.value)}
							/>
						</div>
						<div className={classes.textCreate}>
							<label htmlFor='num'>Company Email</label>
							<input
								type='tel'
								name='num'
								id='num'
								placeholder='1234567890'
								onChange={(e) => setph(e.target.value)}
							/>
						</div>
						<div className={classes.textCreate}>
							<label htmlFor='num2'>
								Phone Number {`(Optional)`}
							</label>
							<input
								type='tel'
								name='num2'
								id='num2'
								placeholder='1234567890'
								onChange={(e) => setph2(e.target.value)}
							/>
						</div>
					</div>
					</div>
				</div>
				<div className={classes.secondCreate}>
					<p
						style={{ display: 'flex', columnGap: '1rem', alignItems: 'center' }}
					>
						<span
							style={{
								borderRadius: '50%',
								backgroundColor: '#366EF1',
								padding: '0.2rem 0',
								color: '#fff',
								display: 'inline-block',
								width: '1.7rem',
								height: '1.7rem',
								textAlign: 'center',
							}}
						>
							2
						</span>
						<span style={{ fontSize: '1.4rem', fontWeight: '600' }}>
							Contact Person
						</span>
					</p>
					<div className={classes.form2Create}>
						<div className={classes.textCreate}>
							<label htmlFor='name'>Contact Person Name</label>
							<input
								type='text'
								name='name'
								id='name'
								placeholder='Eg. John Doe'
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className={classes.textCreate}>
							<label htmlFor='mail'>Email Address</label>
							<input
								type='email'
								name='mail'
								id='mail'
								placeholder='john_Doe@gmail.com'
								onChange={(e) => setmail(e.target.value)}
							/>
						</div>
						<div className={classes.textCreate}>
							<label htmlFor='num'>Phone Number</label>
							<input
								type='tel'
								name='num'
								id='num'
								placeholder='1234567890'
								onChange={(e) => setph(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className={classes.secondCreate}>
                <p
						style={{ display: 'flex', columnGap: '1rem', alignItems: 'center' }}
					>
						<span
							style={{
								borderRadius: '50%',
								backgroundColor: '#366EF1',
								padding: '0.2rem 0',
								color: '#fff',
								display: 'inline-block',
								width: '1.7rem',
								height: '1.7rem',
								textAlign: 'center',
							}}
						>
							2
						</span>
						<span style={{ fontSize: '1.4rem', fontWeight: '600' }}>
							Address
						</span>
					</p>
					<div className={classes.form2Create}>
						
						<div className={classes.textCreate}>
							<label htmlFor='add'>Address</label>
							<input
								type='text'
								name='add'
								id='add'
								placeholder='H.No.-123/123 ...'
								value={sameAdd ? add : add2}
								onChange={(e) => setAdd2(e.target.value)}
							/>
						</div>
						<div className={classes.textCreate}>
							<label htmlFor='city'>City</label>
							<input
								type='text'
								name='city'
								id='city'
								placeholder='Agra'
								value={sameAdd ? city : city2}
								onChange={(e) => setCity2(e.target.value)}
							/>
						</div>
						<div className={classes.textCreate}>
							<label htmlFor='pin'>Pin Code</label>
							<input
								type='text'
								name='pin'
								id='pin'
								placeholder='123456'
								value={sameAdd ? pin : pin2}
								onChange={(e) => setPin2(e.target.value)}
							/>
						</div>
						<div className={classes.textCreate}>
							<label htmlFor='state'>State</label>
							<input
								type='text'
								name='state'
								id='state'
								placeholder='Haryana'
								value={sameAdd ? state : state2}
								onChange={(e) => setState2(e.target.value)}
							/>
						</div>
					</div>
				</div>
                <div className={classes.secondCreate}>
                <p
						style={{ display: 'flex', columnGap: '1rem', alignItems: 'center' }}
					>
						<span
							style={{
								borderRadius: '50%',
								backgroundColor: '#366EF1',
								padding: '0.2rem 0',
								color: '#fff',
								display: 'inline-block',
								width: '1.7rem',
								height: '1.7rem',
								textAlign: 'center',
							}}
						>
							2
						</span>
						<span style={{ fontSize: '1.4rem', fontWeight: '600' }}>
							Billing Details
						</span>
					</p>
					<div className={classes.form2Create}>
						
						<div className={classes.textCreate}>
							<label htmlFor='add'>Full Name</label>
							<input
								type='text'
								name='add'
								id='add'
								placeholder='H.No.-123/123 ...'
								value={sameAdd ? add : add2}
								onChange={(e) => setAdd2(e.target.value)}
							/>
						</div>
						<div className={classes.textCreate}>
							<label htmlFor='city'>Email ID</label>
							<input
								type='text'
								name='city'
								id='city'
								placeholder='Agra'
								value={sameAdd ? city : city2}
								onChange={(e) => setCity2(e.target.value)}
							/>
						</div>
						<div className={classes.textCreate}>
							<label htmlFor='pin'>Phone Number</label>
							<input
								type='text'
								name='pin'
								id='pin'
								placeholder='123456'
								value={sameAdd ? pin : pin2}
								onChange={(e) => setPin2(e.target.value)}
							/>
						</div>
						<div className={classes.textCreate}>
							<label htmlFor='state'>Alternate Phone Number</label>
							<input
								type='text'
								name='state'
								id='state'
								placeholder='Haryana'
								value={sameAdd ? state : state2}
								onChange={(e) => setState2(e.target.value)}
							/>
						</div>
                        
					</div>
                    <div className={classes.form2Create}>
						
						<div className={classes.textCreate}>
							<label htmlFor='add'>Address</label>
							<input
								type='text'
								name='add'
								id='add'
								placeholder='H.No.-123/123 ...'
								value={sameAdd ? add : add2}
								onChange={(e) => setAdd2(e.target.value)}
							/>
						</div>
						<div className={classes.textCreate}>
							<label htmlFor='city'>City</label>
							<input
								type='text'
								name='city'
								id='city'
								placeholder='Agra'
								value={sameAdd ? city : city2}
								onChange={(e) => setCity2(e.target.value)}
							/>
						</div>
						<div className={classes.textCreate}>
							<label htmlFor='pin'>Pincode</label>
							<input
								type='text'
								name='pin'
								id='pin'
								placeholder='123456'
								value={sameAdd ? pin : pin2}
								onChange={(e) => setPin2(e.target.value)}
							/>
						</div>
						<div className={classes.textCreate}>
							<label htmlFor='state'>State</label>
							<input
								type='text'
								name='state'
								id='state'
								placeholder='Haryana'
								value={sameAdd ? state : state2}
								onChange={(e) => setState2(e.target.value)}
							/>
						</div>
                        
					</div>
				</div>
				<div className={classes.submitCreate}>
					<button>Cancel</button>
					<button style={{ backgroundColor: '#0670ed', color: '#fff' }}>
						Add Warehouse
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddWareHouse;
