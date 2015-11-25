using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebAspNetTest.Controllers
{
    public class HelloWorldController : Controller
    {
        // GET: HelloWorld
        /*        public String Index()
                {
                    return "This is my <b>default</b> action...";
                }
        */

        public ActionResult Index()
        {
            return View();
        }

        // GET: /HelloWorld/Welcome/ 
        /*
        public string Welcome(string name, int id = 1)
        {
            return HttpUtility.HtmlEncode("Hello " + name + ", NumTimes is: " + id);
        }
        */

        public ActionResult Welcome(string name, int numTimes = 1)
        {
            ViewBag.Message = "Hello " + name;
            ViewBag.numTimes = numTimes;
            return View();
        }

        public ActionResult MyTestView()
        {
            return View();
        }

       
    }
}