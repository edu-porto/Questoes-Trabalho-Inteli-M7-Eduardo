import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import './index.css';

import axios from "axios"
function MyForm() {
  const [countryName, setCountryName] = useState();
  const [countryData, setCountryData] = useState(null);
 

  // Aqui é um mapping com todas as informações que a API vai consumir visto que não há necessidade do user inputar esses dados 
  const countryDataMap = {
    Afghanistan: {	
      Country : 0,
      Gross_tertiary_education_enrollment: 9.7,
      Population: 38041754,
      Unemployment_rate: 11.12,
      Urban_population:9797273,
      Latitude:33.93911,
      Longitude:67.709953
    },
    Argentina: {
      Country : 1,
      Gross_tertiary_education_enrollment: 90,
      Population: 44938712,
      Unemployment_rate:9.79 ,
      Urban_population:41339571,
      Latitude:-38.416097,
      Longitude:-63.616672
    }, 
    Australia: {
      Country :2 ,
      Gross_tertiary_education_enrollment: 113.1,
      Population: 25766605,
      Unemployment_rate: 5.27,
      Urban_population:21844756,
      Latitude:-25.274398,
      Longitude:133.775136
    },   
    Bangladesh: {
      Country : 3,
      Gross_tertiary_education_enrollment: 20.6,
      Population: 167310838,
      Unemployment_rate:4.19 ,
      Urban_population:60987417,
      Latitude:23.684994,
      Longitude:90.356331
    },    
    Barbados: {
      Country : 4,
      Gross_tertiary_education_enrollment: 65.4,
      Population: 287025,
      Unemployment_rate: 10.33,
      Urban_population:89431,
      Latitude:13.193887,
      Longitude:-59.543198
    },   
    Brazil: {
      Country : 5,
      Gross_tertiary_education_enrollment:51.3 ,
      Population: 212559417,
      Unemployment_rate: 12.08,
      Urban_population:183241641,
      Latitude:-14.235004,
      Longitude:-51.92528
    },  
    Canada: {
      Country : 6,
      Gross_tertiary_education_enrollment: 68.9,
      Population: 36991981,
      Unemployment_rate:5.56 ,
      Urban_population:30628482,
      Latitude:56.130366,
      Longitude:-106.346771 
    },   	
    Chile: {
      Country : 7,
      Gross_tertiary_education_enrollment: 88.5,
      Population: 18952038,
      Unemployment_rate: 7.09,
      Urban_population:16610135,
      Latitude:-35.675147,
      Longitude:-71.542969
    },
    China: {
      Country : 8,
      Gross_tertiary_education_enrollment:50.6 ,
      Population: 1397715000,
      Unemployment_rate:4.32 ,
      Urban_population:842933962,
      Latitude:35.86166,
      Longitude:104.195397
    },    
    Colombia: {
      Country : 9,
      Gross_tertiary_education_enrollment:55.3 ,
      Population: 50339443,
      Unemployment_rate: 9.71,
      Urban_population:40827302,
      Latitude:4.570868,
      Longitude:-74.297333
    },   
    Cuba: {
      Country : 10,
      Gross_tertiary_education_enrollment: 41.4,
      Population: 11333483,
      Unemployment_rate: 1.64,
      Urban_population:8739135,
      Latitude:21.521757,
      Longitude:-77.781167
    },   
    					
    Ecuador: {
      Country : 11,
      Gross_tertiary_education_enrollment:44.9 ,
      Population: 17373662,
      Unemployment_rate: 3.97,
      Urban_population:11116711,
      Latitude:-1.831239,
      Longitude:-78.183406
    },    		
    Egypt: {
      Country : 12,
      Gross_tertiary_education_enrollment: 35.2,
      Population: 100388073,
      Unemployment_rate:10.76 ,
      Urban_population:42895824,
      Latitude:26.820553,
      Longitude:30.802498
    },   	
    El_Salvador: {
      Country : 13,
      Gross_tertiary_education_enrollment: 29.4,
      Population: 6453553,
      Unemployment_rate: 4.11,
      Urban_population:4694702,
      Latitude:13.794185,
      Longitude:-88.89653
    },   
    					
    Finland: {
      Country : 14,
      Gross_tertiary_education_enrollment: 88.2,
      Population: 5520314,
      Unemployment_rate: 6.59,
      Urban_population:4716888,
      Latitude:61.92411,
      Longitude:25.748151
    },   
    France: {
      Country : 15,
      Gross_tertiary_education_enrollment:65.6 ,
      Population: 67059887,
      Unemployment_rate:8.43 ,
      Urban_population:54123364,
      Latitude:46.227638,
      Longitude:2.213749
    },   
    					
    Germany: {
      Country : 16,
      Gross_tertiary_education_enrollment:70.2 ,
      Population: 83132799,
      Unemployment_rate:3.04 ,
      Urban_population:64324835,
      Latitude:51.165691,
      Longitude:10.451526 
    },    
    					
    India: {
      Country : 17,
      Gross_tertiary_education_enrollment:28.1 ,
      Population: 1366417754,
      Unemployment_rate: 5.36,
      Urban_population:471031528,
      Latitude:20.593684,
      Longitude:78.96288
    },    
    					
    Indonesia: {
      Country : 18,
      Gross_tertiary_education_enrollment: 36.3,
      Population: 270203917,
      Unemployment_rate: 4.69,
      Urban_population:151509724,
      Latitude:-0.789275,
      Longitude:113.921327
    },
    					
    Iraq: {
      Country : 19,
      Gross_tertiary_education_enrollment:16.2 ,
      Population: 39309783,
      Unemployment_rate: 12.82,
      Urban_population:27783368,
      Latitude:33.223191,
      Longitude:43.679291
    },
    					
    Italy: {
      Country : 20,
      Gross_tertiary_education_enrollment: 61.9,
      Population: 60297396,
      Unemployment_rate: 9.89,
      Urban_population:42651966,
      Latitude:41.87194,
      Longitude:12.56738
    },
    Japan: {
      Country : 21,
      Gross_tertiary_education_enrollment: 63.2,
      Population: 126226568,
      Unemployment_rate: 2.29,
      Urban_population:115782416,
      Latitude:36.204824,
      Longitude:138.252924
    },
    					
    Jordan: {
      Country : 22,
      Gross_tertiary_education_enrollment: 34.4,
      Population: 10101694,
      Unemployment_rate: 14.72,
      Urban_population:9213048,
      Latitude:30.585164,
      Longitude:36.238414
    },
    Kuwait: {
      Country : 23,
      Gross_tertiary_education_enrollment: 54.4,
      Population: 4207083,
      Unemployment_rate:2.18 ,
      Urban_population:4207083,
      Latitude:29.31166,
      Longitude:47.481766
    },
    					
    Latvia: {
      Country : 24,
      Gross_tertiary_education_enrollment: 88.1,
      Population: 1912789,
      Unemployment_rate: 6.52,
      Urban_population:1304943,
      Latitude:56.879635,
      Longitude:24.603189
    },
    					
    Malaysia: {
      Country : 25,
      Gross_tertiary_education_enrollment: 45.1,
      Population: 32447385,
      Unemployment_rate: 3.32,
      Urban_population:24475766,
      Latitude:4.210484,
      Longitude:101.975766
    },
    					
    Mexico: {
      Country : 26,
      Gross_tertiary_education_enrollment: 40.2,
      Population: 126014024,
      Unemployment_rate: 3.42,
      Urban_population:102626859,
      Latitude:23.634501,
      Longitude:-102.552784
    },
    					
    Morocco: {
      Country : 27,
      Gross_tertiary_education_enrollment: 35.9,
      Population: 36910560,
      Unemployment_rate: 9.02,
      Urban_population:22975026,
      Latitude:31.791702,
      Longitude:-7.09262
    },
    				
    Netherlands: {
      Country : 28,
      Gross_tertiary_education_enrollment: 85,
      Population: 17332850,
      Unemployment_rate: 3.2	,
      Urban_population:15924729,
      Latitude:52.132633,
      Longitude:5.291266
    },
    					
    Pakistan: {
      Country : 29,
      Gross_tertiary_education_enrollment: 9,
      Population: 216565318,
      Unemployment_rate: 4.45,
      Urban_population:79927762,
      Latitude:30.375321,
      Longitude:69.345116
    },
    					
    Peru: {
      Country : 30,
      Gross_tertiary_education_enrollment: 70.7,
      Population: 32510453,
      Unemployment_rate: 3.31,
      Urban_population:25390339,
      Latitude:-9.189967,
      Longitude:-75.015152
    },
    					
    Philippines: {
      Country : 31,
      Gross_tertiary_education_enrollment: 35.5,
      Population: 108116615,
      Unemployment_rate:2.15 ,
      Urban_population:50975903,
      Latitude:12.879721,
      Longitude:121.774017
    },
    					
    Russia: {
      Country : 32,
      Gross_tertiary_education_enrollment: 81.9,
      Population: 144373535,
      Unemployment_rate: 4.59,
      Urban_population:107683889,
      Latitude:61.52401,
      Longitude:105.318756
    },
    				
    Samoa: {
      Country : 33,
      Gross_tertiary_education_enrollment: 7.6,
      Population: 202506,
      Unemployment_rate:8.36,
      Urban_population:35588	,
      Latitude:-13.759029,
      Longitude:-172.104629
    },
    					
    Saudi_Arabia: {
      Country : 34,
      Gross_tertiary_education_enrollment: 68,
      Population: 34268528,
      Unemployment_rate: 5.93,
      Urban_population:28807838,
      Latitude:23.885942,
      Longitude:45.079162
    },
    					
    Singapore: {
      Country : 35,
      Gross_tertiary_education_enrollment: 84.8,
      Population: 5703569,
      Unemployment_rate:4.11 ,
      Urban_population:5703569,
      Latitude:1.352083,
      Longitude:103.819836
    },
    					
    South_Korea: {
      Country : 36,
      Gross_tertiary_education_enrollment:94.3 ,
      Population: 51709098,
      Unemployment_rate: 4.15,
      Urban_population:42106719,
      Latitude:35.907757,
      Longitude:127.766922
    },
    					
    Spain: {
      Country : 37,
      Gross_tertiary_education_enrollment:88.9 ,
      Population: 47076781,
      Unemployment_rate:13.96 ,
      Urban_population:37927409,
      Latitude:40.463667,
      Longitude:-3.74922
    },
    					
    Sweden: {
      Country : 38,
      Gross_tertiary_education_enrollment: 67,
      Population: 10285453,
      Unemployment_rate:6.48 ,
      Urban_population:9021165,
      Latitude:60.128161,
      Longitude:18.643501
    },
    					
    Switzerland: {
      Country : 39,
      Gross_tertiary_education_enrollment: 59.6,
      Population: 8574832,
      Unemployment_rate:4.58 ,
      Urban_population:6332428,
      Latitude:46.818188,
      Longitude:8.227512
    },
    					
    Thailand: {
      Country : 40,
      Gross_tertiary_education_enrollment: 49.3,
      Population: 69625582,
      Unemployment_rate:0.75 ,
      Urban_population:35294600,
      Latitude:15.870032,
      Longitude:100.992541
    },
    					
    Turkey: {
      Country : 41,
      Gross_tertiary_education_enrollment: 23.9,
      Population: 83429615,
      Unemployment_rate:13.49 ,
      Urban_population:69781830,
      Latitude:38.963745,
      Longitude:35.243322
    },
    					
    Ukraine: {
      Country : 42,
      Gross_tertiary_education_enrollment: 82.7,
      Population: 44385155,
      Unemployment_rate: 8.88,
      Urban_population:30835699,
      Latitude:48.379433,
      Longitude:31.16558
    },
    					
    United_Arab_Emirates: {
      Country : 43,
      Gross_tertiary_education_enrollment:36.8 ,
      Population: 9770529,
      Unemployment_rate: 2.35,
      Urban_population:8479744,
      Latitude:23.424076,
      Longitude:53.847818
    },
    United_Kingdom: {
      Country : 44,
      Gross_tertiary_education_enrollment:60 ,
      Population: 66834405,
      Unemployment_rate: 3.85,
      Urban_population:55908316,
      Latitude:55.378051,
      Longitude:-3.435973
    },
   					
    United_States: {
      Country : 45,
      Gross_tertiary_education_enrollment:  88.2,
      Population: 328239523,
      Unemployment_rate:14.7 ,
      Urban_population:270663028,
      Latitude:37.09024,
      Longitude:-95.712891
    },
    					
    Venezuela: {
      Country : 46,
      Gross_tertiary_education_enrollment: 79.3,
      Population: 28515829,
      Unemployment_rate:8.8 ,
      Urban_population:25162368,
      Latitude:6.42375,
      Longitude:-66.58973
    },
    					
    Vietnam: {
      Country : 47,
      Gross_tertiary_education_enrollment: 28.5,
      Population: 96462106,
      Unemployment_rate:2.01 ,
      Urban_population:35332140,
      Latitude:14.058324,
      Longitude:108.277199
    }


  };

  const handleCountryChange = () => {
    if (countryName in countryDataMap) {
      // If the country name is in the mapping, set the corresponding data
      setCountryData(countryDataMap[countryName]);
    } else {
      // Handle the case where the country name is not found
      setCountryData(null);
    }
  };


  // Aqui é o estado de cada campo de input
  const [formData, setFormData] = useState({
    subscribers: '',
    video_views: '',
    uploads: '',
    video_views_rank: '',
    country_rank: '',
    channel_type_rank: '',
    subscribers_for_last_30_days: '',
    category: '',
    channel_type: '',
    created_date:'',
    created_month:'',
    created_year:''
  });

  // Mudando o valor de cada input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // Aqui é feito o post
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {


      const postData = {
        ...formData,
        ...countryDataMap[countryName],
      }

      console.log(postData)

      // Make a POST request using Axios
      const response = await axios.post('http://localhost:8000/prediction/', postData);
      document.getElementById('api-response').innerHTML = `API Response: ${JSON.stringify(response.data)}`;
      // Handle the response or any other logic here
      console.log('Data posted:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Predict monthly youtube views</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-container">
          <label>subscribers</label>
          <input
            type="text" 
            name="subscribers"
            value={formData.subscribers}
            onChange={handleInputChange}
          />
          <label>video views</label>
          <input
            type="text"
            name="video_views"
            value={formData.video_views}
            onChange={handleInputChange}
          />
        </div>
        <div class="form-container">
          <label>uploads</label>
          <input
            type="text"
            name="uploads"
            value={formData.uploads}
            onChange={handleInputChange}
          />
        <label>video_views_rank</label>
          <input
            type="text"
            name="video_views_rank"
            value={formData.video_views_rank}
            onChange={handleInputChange}
          />
        </div>
        <div class="form-container">
        <label>country_rank</label>
          <input
            type="text"
            name="country_rank"
            value={formData.country_rank}
            onChange={handleInputChange}
          />
        <label>channel_type_rank</label>
          <input
            type="text"
            name="channel_type_rank"
            value={formData.channel_type_rank}
            onChange={handleInputChange}
          />
        </div>
        <div class="form-container">
        <label>subscribers_for_last_30_days</label>
          <input
            type="text"
            name="subscribers_for_last_30_days"
            value={formData.subscribers_for_last_30_days}
            onChange={handleInputChange}
          />
        </div>
        <div class="form-container">
          <label>category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">Select Option</option>
            <option value="0">Autos & Vehicles</option>
            <option value="1">Comedy </option>
            <option value="2"> Education</option>
            <option value="3"> Entertainment</option>
            <option value="4"> Film & Animation</option>
            <option value="5"> Gaming</option>
            <option value="6"> Howto & Style</option>
            <option value="7"> Movies</option>
            <option value="8"> Music</option>
            <option value="9"> News & Politics</option>
            <option value="10"> Nonprofits & Activism</option>
            <option value="11">People & Blogs </option>
            <option value="12"> Pets & Animals</option>
            <option value="13">Science & Technology</option>
            <option value="14">Shows</option>
            <option value="15">Sports</option>
            <option value="16">Trailers</option>
            <option value="17">Travel & Events</option>
            <option value="18">Others</option>
          </select>
        </div>
      <div class="form-container">  
      <label>Country</label>
      <select
        type="text"
        placeholder="Enter a country name"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        onBlur={handleCountryChange} // You can also use a button or another event to trigger the data update
      >
      <option value="">Select Option</option>
      <option value="Afghanistan">Afghanistan</option>
      <option value="Argentina">Argentina</option>
      <option value="Australia">Australia</option>
      <option value="Bangladesh">Bangladesh</option>
      <option value="Barbados">Barbados</option>
      <option value="Brazil">Brazil</option>
      <option value="Canada">Canada</option>
      <option value="Chile">Chile</option>
      <option value="China">China</option>
      <option value="Colombia">Colombia</option>
      <option value="Cuba">Cuba</option>
      <option value="Ecuador">Ecuador</option>
      <option value="Egypt">Egypt</option>
      <option value="El_Salvador">El Salvador</option>
      <option value="Finland">Finland</option>
      <option value="France">France</option>
      <option value="Germany">Germany</option>
      <option value="India">India</option>
      <option value="Indonesia">Indonesia</option>
      <option value="Iraq">Iraq</option>
      <option value="Italy">Italy</option>
      <option value="Japan">Japan</option>
      <option value="Jordan">Jordan</option>
      <option value="Kuwait">Kuwait</option>
      <option value="Latvia">Latvia</option>
      <option value="Malaysia">Malaysia</option>
      <option value="Mexico">Mexico</option>
      <option value="Morocco">Morocco</option>
      <option value="Netherlands">Netherlands</option>
      <option value="Pakistan">Pakistan</option>
      <option value="Peru">Peru</option>
      <option value="Philippines">Philippines</option>

      <option value="Russia">Russia</option>
      <option value="Samoa">Samoa</option>
      <option value="Saudi_Arabia">Saudi Arabia</option>
      <option value="Singapore">Singapore</option>

      <option value="South_Korea">South Korea</option>
      <option value="Spain">Spain</option>
      <option value="Sweden">Sweden</option>
      <option value="Switzerland">Switzerland</option>

      <option value="Thailand">Thailand</option>
      <option value="Turkey">Turkey</option>
      <option value="Ukraine">Ukraine</option>
      <option value="United_Arab_Emirates">United Arab Emirates</option>

      <option value="United_Kingdom">United Kingdom</option>
      <option value="United_States">United States</option>
      <option value="Venezuela">Venezuela</option>
      <option value="Vietnam">Vietnam</option>


      </select>
      </div>
        <div class="form-container">
        <label>channel_type</label>
          <select
            name="channel_type"
            value={formData.channel_type}
            onChange={handleInputChange}
          >
            <option value="">Select Option</option>
            <option value="0">Animals</option>
            <option value="1">Autos</option>
            <option value="2">Comedy</option>
            <option value="3">Education</option>
            <option value="4">Entertainment</option>
            <option value="5">Film</option>
            <option value="6">Games</option>
            <option value="7">Howto</option>
            <option value="8">Music</option>
            <option value="9">News</option>
            <option value="10">Nonprofit</option>
            <option value="11">People</option>
            <option value="12">Sports</option>
            <option value="13">Tech</option>
            <option value="14">Outros</option>

          </select>
        </div>
        <div>
        <label>Day</label>
          <input
            type="number"
            name="created_date"
            value={formData.created_date}
            onChange={handleInputChange}
          />
        </div>
        <div>
        <label>Month</label>
          <input
            type="number"
            name="created_month"
            value={formData.created_month}
            onChange={handleInputChange}
          />
        </div>
        <div>
        <label>Year</label>
          <input
            type="number"
            name="created_year"
            value={formData.created_year}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <div>
        <h1 id='api-response'></h1>
      </div>
    </div>


  );
}


function App(){
  const [post, setPost] = useState({
    title: '',
    body:''
  })
  const handleInput = (event) => {

  }
  return(
    <div>
      <div>
      </div>
      <MyForm></MyForm>
      <div></div>
      <div>
      <br></br>
      <br></br>
      <br></br>
      {/* <Country></Country> */}

      </div>
    </div>
  )
}

export default App;
