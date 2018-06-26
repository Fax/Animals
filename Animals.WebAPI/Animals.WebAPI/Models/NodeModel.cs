using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Animals.WebAPI.Models
{
    public class NodeModel
    {

        public NodeModel(string name)
        {
            this.Name = name;
        }

        public void MultiplyBy2()
        {
            this.Size = this.Size * 2;
        }

        public int MultiplyBy3()
        {
            this.Size = this.Size * 3;
            return 4;
        }
        public string Name { get; set; }

        // public string Description { get; set; }

        public List<NodeModel> Children { get; set; }

        public int? Size { get; set; }

    
    }
}