import React from 'react';
import NavBar from './components/NavBar';
import CorouselMain from './components/CorouselMain';
import ButtonReact from './components/Button'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      Bigbasket
      <NavBar />
      <div style={{marginTop: '30px'}}>
      <CorouselMain />
      </div>

      <div className="ml-3" style={{display: 'flex' , justifyContent: 'center' , alignItems: 'center', marginTop: "20px" , marginLeft: '100px' , marginRight: '100px'}}>
      <ButtonReact type="danger" text="Precautionary Measures" size="lg"/>
      <ButtonReact type="warning" text="Mango" size="lg" />
      <ButtonReact type="secondary" text="Home and Kitchen" size="lg" />
      <ButtonReact type="secondary" text="Egg, Meat and Fish" />
      <ButtonReact type="secondary" text="Combo Store" />
      <ButtonReact type="secondary" text="Deals of the Week" />
      </div>
      <Card headerText="Bank Offers" ImageArray={["https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/113d146d-8bf2-47f0-ad76-b05492f99195/All_ICICINet_DT_1_480x360_6thJuly.jpg"
      , "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/113d146d-8bf2-47f0-ad76-b05492f99195/All_Paytm_DT_2_480x360_6thJuly.jpg",
      "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/113d146d-8bf2-47f0-ad76-b05492f99195/All_HSBC_DT_3_480x360_6thJuly.jpg",
      "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/113d146d-8bf2-47f0-ad76-b05492f99195/T1_All_Induslnd_DT_4_480x360_6thJuly.jpg"]}/>
      
      <Card headerText="Seasons Must Have" ImageArray={["https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/08b8adf2-158a-4b7e-8298-51efd08bff2a/2007017_tea-coffee_360.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/08b8adf2-158a-4b7e-8298-51efd08bff2a/2007074_frozen-snacks_360_3rd.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/08b8adf2-158a-4b7e-8298-51efd08bff2a/2007018_umbrellas-cloth_360.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/08b8adf2-158a-4b7e-8298-51efd08bff2a/2007019_fresheners_360.jpg"]}/>
    
    <Card  headerText="Fruits & Vegetables" ImageArray={["https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/f4b21a4e-9109-4ce4-843c-7a2d2c2aec0d/T1_All_Fresh-Fruits_DT_1_480x360_25thJune.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/f4b21a4e-9109-4ce4-843c-7a2d2c2aec0d/T1_All_Fresh-Vegetables_DT_2_480x360_25thJune.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/f4b21a4e-9109-4ce4-843c-7a2d2c2aec0d/T1_All_Cuts-Sprouts_DT_3_480x360_25thJune.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/f4b21a4e-9109-4ce4-843c-7a2d2c2aec0d/T1_All_Exotics_DT_4_480x360_25thJune.jpg"]} />

    <Card headerText="Cleaning & Household" ImageArray={["https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/00b2477f-2ab5-4223-a956-46677f6cbf35/2007059_detergent-powder_360.jpg",
  "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/00b2477f-2ab5-4223-a956-46677f6cbf35/2007060_liquid-detergent_360.jpg",
  "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/00b2477f-2ab5-4223-a956-46677f6cbf35/2007061_home-cleaners_360.jpg",
  "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/00b2477f-2ab5-4223-a956-46677f6cbf35/T1_All_Pooja-Needs_DT_4_480x360_25htJune.jpg"]} />
    </div>
  );
}

export default App;
