import React from 'react';
import NavBar from './components/NavBar';
import CorouselMain from './components/CorouselMain';
import ButtonReact from './components/Button'
import Card from './components/Card'
import BigCard from './components/BigCard';

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
    
    <BigCard headerText="Staples Corner" MainImage="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/ec0609fe-11dd-41b1-85e0-8c7a05fdebbf/T1_All_Masalas-Spices_DT_1_560x378_South_25thJune.jpg"
    ImageArray={["https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/ec0609fe-11dd-41b1-85e0-8c7a05fdebbf/T1_All_Atta_Flour_DT_2_275x184_25thJune.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/ec0609fe-11dd-41b1-85e0-8c7a05fdebbf/T1_All_Atta_Flour_DT_2_275x184_25thJune.jpg" , 
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/ec0609fe-11dd-41b1-85e0-8c7a05fdebbf/T1_All_Rice-Rice-Products_DT_4_275x184_25thJune.jpg" ,
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/ec0609fe-11dd-41b1-85e0-8c7a05fdebbf/T1_All_DryFruits_DT_5_275x184_11thJuly.jpg"]} />

    <Card  headerText="Fruits & Vegetables" ImageArray={["https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/f4b21a4e-9109-4ce4-843c-7a2d2c2aec0d/T1_All_Fresh-Fruits_DT_1_480x360_25thJune.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/f4b21a4e-9109-4ce4-843c-7a2d2c2aec0d/T1_All_Fresh-Vegetables_DT_2_480x360_25thJune.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/f4b21a4e-9109-4ce4-843c-7a2d2c2aec0d/T1_All_Cuts-Sprouts_DT_3_480x360_25thJune.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/f4b21a4e-9109-4ce4-843c-7a2d2c2aec0d/T1_All_Exotics_DT_4_480x360_25thJune.jpg"]} />

<BigCard headerText="Fill Up Your Pantry!"  MainImage="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/1254ad92-9857-498f-8ff3-7d7f3c4b68a6/2007033_namkeens_378.jpg"
   ImageArray={["https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/1254ad92-9857-498f-8ff3-7d7f3c4b68a6/2007034_biscuits-cookies_184.jpg",
   "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/1254ad92-9857-498f-8ff3-7d7f3c4b68a6/2007035_chip-nacho-popcorn_184.jpg",
   "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/1254ad92-9857-498f-8ff3-7d7f3c4b68a6/T1_All_ReadytoCook_DT_3_275x184_25thJune.jpg",
   "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/1254ad92-9857-498f-8ff3-7d7f3c4b68a6/T1_All_Sauces-Spreads_DT_5_275x184_11thJuly.jpg"]} />

    <Card headerText="Cleaning & Household" ImageArray={["https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/00b2477f-2ab5-4223-a956-46677f6cbf35/2007059_detergent-powder_360.jpg",
  "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/00b2477f-2ab5-4223-a956-46677f6cbf35/2007060_liquid-detergent_360.jpg",
  "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/00b2477f-2ab5-4223-a956-46677f6cbf35/2007061_home-cleaners_360.jpg",
  "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/00b2477f-2ab5-4223-a956-46677f6cbf35/T1_All_Pooja-Needs_DT_4_480x360_25htJune.jpg"]} />
   
   <BigCard headerText="Beauty & Hygiene" MainImage="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/ff15da39-2806-41f5-bfbf-c7676835ac10/T1_All_Handwash_Sanitizers_DT_1_560x378_25thJune.jpg"
   ImageArray={["https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/ff15da39-2806-41f5-bfbf-c7676835ac10/2007040_mens-grooming_184.jpg",
   "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/ff15da39-2806-41f5-bfbf-c7676835ac10/2007038_deos-fragrances_184.jpg",
   "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/ff15da39-2806-41f5-bfbf-c7676835ac10/T1_All_OralCare_DT_3_275x184_11thJuly.jpg",
   "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/ff15da39-2806-41f5-bfbf-c7676835ac10/T1_All_Feminine_Hygiene_DT_5_275x184_25thJune.jpg" ]} />
   
   
    </div>
  );
}

export default App;
