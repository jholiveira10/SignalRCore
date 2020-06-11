using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RealTimeApi.Models;

namespace RealTimeApi.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Promocao()
        {
            return View();
        }

        public IActionResult CadastrarPromocao()
        {
            return View();
        }
    }
}
