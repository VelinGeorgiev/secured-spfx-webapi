using PnP.IceCreamShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PnP.IceCreamShop.Controllers
{
    [Authorize]
    public class FlavoursController : ApiController
    {
        public IList<IceCream> Get()
        {
            return new List<IceCream>()
            {
                new IceCream() { Favour = "Vanilla", Price = 6.99m },
                new IceCream() { Favour = "Chocolate", Price = 7.99m }
            };
        }
    }
}
