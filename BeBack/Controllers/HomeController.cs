using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GenericAPI;

namespace BeBack.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var g = new GenericAPI.GenericAPI("https://www.wifisensorcloud.com/graphdata.asmx/Readings?sessionid=7647027", "", "", "", "", "", 5, 500);
            return View();
        }

        public ActionResult Admin()
        {
            return View();
        }

    }
}