import './App.css';
import logo from './img/logo.svg';
import Vector from './img/Vector.svg';
import blueIndicator from './img/blueIndicator.svg'
import greenIndicator from './img/greenIndicator.svg'
import whiteArrow from './img/whiteArrow.svg'
import blackArrow from './img/blackArrow.svg'
import car from './img/car.png'
import cardTitleIcon from './img/cardTitleIcon.svg'

function App() {
    return (
        <div className="app">
            <header className="app__header">
                <div className="header__logo">
                    <img src={logo} alt=""/>
                </div>
                <nav>
                    <a href="/#">Home</a>
                    <img src={Vector} alt=""/>
                    <a href="/#">B.B4</a>
                    <img src={Vector} alt=""/>
                    <a href="/#">0.07</a>
                    <img src={Vector} alt=""/>
                    <a href="/#">Token</a>
                </nav>
                <Button up={true}>General Bonding</Button>

            </header>

            <div className="body__wrapper">
                <div className="body__header"><h1>General Bonding Pool</h1>
                    <Input placeholder={'XX.XX'} indicator={'APY'}>%</Input>
                    <Input green={true} placeholder={'XXXXXX.XX'} indicator={'TVL'}>$</Input>
                </div>
                <div className="wallet__card ">
                    <CardTitle styling={{paddingLeft: '28px', borderTop: '2px solid #303030'}}>Your Wallet
                        Balance</CardTitle>
                    <div className={'wallet__card__content'}>
                        <img src={car} alt=""/>
                        <h4>787,000 <span>OMIRA</span></h4>
                    </div>
                </div>
                <div className={'cards__union'} style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Card price={'$500.56'} buttonType={'Staked'} title={'Staked Balance'}>26,870</Card>

                    <Card buttonType={'Unclaimed'} title={'Unclaimed Rewards'}>1,500.56</Card>
                </div>
            </div>

        </div>
    );
}

function Card({children, title, buttonType, price}) {

    return (

        <div className={'card__wrapper'}>
            <CardTitle>{title}</CardTitle>

            <div style={price ? {alignItems: 'center'} : {alignItems: 'baseline'}} className="card__wrapper__amount">
                <h5>{children}</h5>
                <div style={{marginLeft: '13px'}}>

                    <p>OMIRA</p>
                    {price && <span className={'price'}>{price}</span>}
                </div>
            </div>
            {buttonType === 'Staked' ?
                <div className={'staked__buttons'} style={{display: 'flex'}}><Button styling={{marginRight: '10px'}}>Withdraw</Button>
                    <Button black={true}>Deposit</Button></div>
                : buttonType === 'Unclaimed' ?
                    <Button noArrow={true} styling={{padding: '12px 78px'}}>Claim</Button> : ''}
        </div>
    )
}

function CardTitle({children, styling}) {
    return (<h3 style={styling} className={'card__title'}>
        <img src={cardTitleIcon} alt=""/>
        {children}</h3>)
}

function Input({children, placeholder, indicator, green}) {
    return (
        <div className={'input__wrapper'}>
            <img src={green ? greenIndicator : blueIndicator} alt=""/>
            <label htmlFor="stat">Live {indicator}:</label>
            <input placeholder={placeholder} name={'stat'} type="text"/>
            {children}
        </div>
    )
}

function Button({styling, children, up, noArrow, black}) {
    return (
        <button style={styling} className={black ? "action__btn black" : "action__btn"}>{children}
            <img style={noArrow ? {display: 'none'} : up ? {transform: 'rotate(180deg)'} : {}}
                 src={black ? whiteArrow : blackArrow} alt=""/>

        </button>
    )
}

export default App;
