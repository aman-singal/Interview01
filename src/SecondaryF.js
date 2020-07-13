import React from 'react'
import {Row , Col , Image } from 'react-bootstrap'

function SecondaryF() {
    return (
        <div style={{marginLeft: '104.5px' , marginRight: '89.5px' , marginTop: '15px' , padding: '15px'}}>
            <Row>
                <Col>
                <div style={{color: 'green' , fontWeight: 'bold'}}>
                bigbasket
                </div>
                
                <ul style={{listStyleType: 'none' , paddingLeft: '0px' , marginTop: '20px' , fontSize: '14px'}}>
                    <li>
                        About Us
                    </li>
                    <li>
                      In News  
                    </li>
                    <li>
                        Green Basket
                    </li>
                    <li>
                        Privacy Policy
                    </li>
                </ul>
                </Col>
                <Col>
                <div style={{color: 'green' , fontWeight: 'bold'}}>
                    Help
                </div>
                <ul style={{listStyleType: 'none' , paddingLeft: '0px' , marginTop: '20px' , fontSize: '14px'}}>
                    <li>
                        FAQs
                    </li>
                    <li>
                      Contact Us
                    </li>
                    <li>
                        bb wallet FAQs
                    </li>
                    <li>
                        bb wallet T&C
                    </li>
                    <li>
                        Vendor Contact
                    </li>
                </ul>
                </Col>
                <Col>
                <div style={{color: 'green' , fontWeight: 'bold'}}>
                Download Our App
                </div>
                <ul style={{listStyleType: 'none' , paddingLeft: '0px' , marginTop: '20px' , fontSize: '14px'}}>
                    <li> <Image style={{width: '150px' , height: '49px'}} src="https://www.bbassets.com/static/v2304/custPage/build/content/img/Google-App-store-icon.png" alt="Google Play" /></li>
                    <li> <Image style={{width: '150px' , height: '49px'}} src="https://www.bbassets.com/static/v2304/custPage/build/content/img/Apple-App-store-icon.png"  alt="Apple Store" /> </li>
                </ul>
                </Col>
                <Col>
                <div style={{color: 'green' , fontWeight: 'bold'}}>
                    Get Social With Us
                </div>
                </Col>
            </Row>

            <hr />
            <div style={{marginTop: '15px'}}>
            <Row>
                <Col xs={2} style={{color: '#6cd138' , fontSize: '14px'}}>
                POPULAR CATEGORIES:
                </Col>
                <Col style={{color: 'grey' , fontSize: '14px'}}>
                Washing Powders, Milk, Tea, Liquid Soaps & Bars, Toor Dal, Ghee, Washing Bars, Other Fruits, Butter & Cream, Basmati Rice, Cheese, Fresh Chicken, Toothpaste, Toilet Cleaners, Glucose, Marie & Milk Biscuits,
                </Col>
            </Row>
            </div>
            
            <div style={{marginTop: '15px'}}>
            <Row>
                <Col xs={2} style={{color: '#6cd138' , fontSize: '14px'}}>
                POPULAR BRANDS:
                </Col>
                <Col style={{color: 'grey' , fontSize: '14px'}}>
                Fresho, bb Royal, Surf Excel, Amul, Nestle , Saffola, Britannia, Harpic, Lizol, Colgate, Dettol, Dabur, Tata I Shakti, Dhara , Fresho Meats, Parle, Real, Tropicana, Kissan, danone,
                </Col>
            </Row>
            </div>
            <div style={{marginTop: '15px'}}>
            <Row>
                <Col  xs={2} style={{color: '#6cd138' , fontSize: '14px'}} >
                CITIES WE SERVE:
                </Col>
                <Col style={{color: 'grey' , fontSize: '14px'}}>
                Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore, Chandigarh Tricity, Jaipur, Bhopal, Noida-Ghaziabad, Kochi, 
                </Col>
            </Row>
            </div>
            
        </div>
    )
}

export default SecondaryF
