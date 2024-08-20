using Nop.Web.Framework.Models;
using Nop.Web.Models.Catalog;

namespace Nop.Web.Models.Common;

public partial record SidebarModel : BaseNopModel
{
    public SidebarModel()
    {
        Categories = new List<CategorySimpleModel>();
    }

    public int CurrentCategoryId { get; set; }
    public List<CategorySimpleModel> Categories { get; set; }

    #region Nested classes

    public partial record CategoryLineModel : BaseNopModel
    {
        public int CurrentCategoryId { get; set; }
        public CategorySimpleModel Category { get; set; }
    }

    #endregion
}