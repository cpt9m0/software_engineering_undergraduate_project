import React, {Component} from 'react';
import '../App.css';
import '../plusCss.css';
import Header from './Header';
import { Redirect } from 'react-router-dom';

class Addpage extends React.Component{

     ShowAddUniversityForm = () => {
        var x = document.getElementById("myDIV");
        if (window.getComputedStyle(x).visibility === "hidden") {
          x.style.visibility = "visible";
        }
      }

      ShowAddOstadForm = () => {
        var y = document.getElementById("myDIV2");
        if (window.getComputedStyle(y).visibility === "hidden") {
            y.style.visibility = "visible";
          }
      }

      ShowAddCourseForm = () => {
        var z = document.getElementById("myDIV3");
        if (window.getComputedStyle(z).visibility === "hidden") {
            z.style.visibility = "visible";
          }
      }

      ShowAddDepForm = () => {
        var o = document.getElementById("myDIV4");
        if (window.getComputedStyle(o).visibility === "hidden") {
            o.style.visibility = "visible";
          }
      }

   render(){
       return(
<div>
<Header/>

        <div className="allback">
        <div className="addUnibtn">
            <button onClick={this.ShowAddUniversityForm} className="bt more-bt" href="javascript:void(0)">
         <span className="fl"></span><span className="sfl"></span>
         <span className = "cross"></span>
          <i></i><p>دانشگاه</p>
            </button>
            <div id="myDIV" className="addForm">
                <p>اضافه کردن دانشگاه</p>
            <form>
          <p>نام دانشگاه</p>
          <input type="text" name="" placeholder="نام دانشگاه را وارد کنید"></input>
          <p></p>
          <input type="submit" name="" value="تایید اطلاعات"></input>
        </form>
        </div>
            </div>

          <div className="addOstadbtn">
              <button onClick={this.ShowAddOstadForm} className="bt more-bt"  href="javascript:void(0)">
         <span className="fl"></span><span className="sfl"></span><span className = "cross"></span>
          <i></i><p>استاد</p>
          </button>
          <div id="myDIV2" className="addForm">
                <p>اضافه کردن استاد</p>
            <form>
          <p>نام استاد</p>
          <input type="text" name="" placeholder="نام استاد را وارد کنید"></input>
          <p>دانشگاه استاد</p>
          <input type="text" name="" placeholder="استاد مورد نظر در کدام دانشگاه تدریس میکند"></input>
          <p></p>
          <input type="submit" name="" value="تایید اطلاعات"></input>
        </form>
        </div>
        </div>

        <div className="addCoursebtn">
            <button onClick={this.ShowAddCourseForm} className="bt more-bt" href="javascript:void(0)">
         <span className="fl"></span><span className="sfl"></span>
         <span className = "cross"></span>
          <i></i><p>درس</p>
            </button>
            <div id="myDIV3" className="addForm">
                <p>اضافه کردن درس جدید</p>
            <form>
          <p>نام درس</p>
          <input type="text" name="" placeholder="نام درس را وارد کنید"></input>
          <p></p>
          <input type="submit" name="" value=" تایید اطلاعات"></input>
        </form>
        </div>
            </div>

            <div className="addDepartmentbtn">
            <button onClick={this.ShowAddDepForm} className="bt more-bt" href="javascript:void(0)">
         <span className="fl"></span><span className="sfl"></span>
         <span className = "cross"></span>
          <i></i><p>دانشکده</p>
            </button>
            <div id="myDIV4" className="addForm">
                <p>اضافه کردن دانشکده جدید</p>
            <form>
          <p>نام درس</p>
          <input type="text" name="" placeholder="نام دانشکده را وارد کنید"></input>
          <p></p>
          <input type="submit" name="" value="تایید اطلاعات"></input>
        </form>
        </div>
            </div>
           </div>   
</div>
       );
   }
}

export default Addpage;