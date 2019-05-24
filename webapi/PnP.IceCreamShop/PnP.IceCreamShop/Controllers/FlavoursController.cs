using PnP.IceCreamShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PnP.IceCreamShop.Controllers
{
    [Authorize]
    [EnableCors(origins: "https://velingeorgiev.sharepoint.com", headers: "*", methods: "*")]
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
