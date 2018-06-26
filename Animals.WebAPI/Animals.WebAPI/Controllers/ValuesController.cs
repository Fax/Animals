using Animals.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Animals.WebAPI.Controllers
{
    /*
     * 
     * children = [];
     [{
            "name": "flare",
            "children": [
                {
                    "name": "analytics",
                    "children": [
                        {
                            "name": "cluster",
                            "children": [
                                {"name": "AgglomerativeCluster", "size": 3938},
                                {"name": "CommunityStructure", "size": 3812},
                                {"name": "HierarchicalCluster", "size": 6714},
                                {"name": "MergeEdge", "size": 743}
                            ]
                        },
                        */
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public NodeModel Get(int id)
        {

            var test = new NodeModel("flare");
            //test.Description = "desc";
            test.Size = 1000;
            test.MultiplyBy2();

            test.Children = new List<NodeModel>();

            var analytics = new NodeModel("Analytics");

            test.Children.Add(analytics);
            return test;
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}

