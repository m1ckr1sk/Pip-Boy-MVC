using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Pip_Boy_MVC.Models;

namespace Pip_Boy_MVC.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.experience = "Level 22";
            ViewBag.health = "HP 345/360";
            ViewBag.action = "AP 123/345";
            return View();
        }
    }
}
