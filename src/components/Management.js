import React from "react";
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Management.css"
function Management() {
    return (
        <div style={{ marginLeft: "20%", marginRight: "20%" }}>
            <div class="manag">
                <div className="header1">Our Management</div>
            </div>
            <div class="manage-sec">
                <div className="item1">
                    <img class="h-auto " src="https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=612x612&w=0&k=20&c=sfA4jU8kXKZZqQiy0pHlQ4CeDR0DxCxXhtuTDEW81oo=" alt="image description" />
                </div>
                <div className="item1">
                    <img class="h-auto " src="https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=612x612&w=0&k=20&c=sfA4jU8kXKZZqQiy0pHlQ4CeDR0DxCxXhtuTDEW81oo=" alt="image description" />
                </div>
                <div className="item1">
                    <img class="h-auto " src="https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=612x612&w=0&k=20&c=sfA4jU8kXKZZqQiy0pHlQ4CeDR0DxCxXhtuTDEW81oo=" alt="image description" />
                </div>

            </div>


            <div class="manag">
                <div className="header1" style={{ fontSize: "25px" }}>We are adding value To The Investement</div>
            </div>
            <div className="thumb">
                <img class=" rounded-lg" height="200px" width="490px" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/improve-your-business-youtube-thumbnail-design-template-048f462e9ef3f356a9a1992d4e8cd5aa_screen.jpg?ts=1598387935" alt="image description" />

            </div>

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                <div style={{ height: "250px", width: "40%", borderRadius: "15px", boxShadow: "rgb(0 0 0 / 40%) 1px 1px 10px 1px", display: "flex", flexDirection: "column", textAlign: "center" }}>
                    <div className="header1" style={{ fontSize: "25px" }}>Company Related Info</div>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <div>




                            
                            <img  style={{margin:"auto"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEElEQVR4nO1aW4tcRRDuNd7vRlFXNzPTdapmlsFE42qMKCz4ImriombUPdUnAxHWB4mof0AfRCNeEm+oiesFBQWvT/ElUcTLw/okQfHGihdwzaqIQdA1MVI7k2X3nD4zfeacs7OG+aCZl+mq+vpUV1dXtVI99NDDYYPKpspJHnsXAtN1pcALPENjmnETBHS95vLFBb9wmvq/oFqrHu353ohmegoMfgGGDrYZ/2qmPdrgY7IA/WP9x+duZEFWtKaWuf6fNtK5YPBhbXDagVCLgb9qpi0QQCEXYhCUL9cG/wHGD5Dx5Fb/LdaLp8qqa6a/0pFaOES/Znwmc7fVpnzbnBKmj+MIaoM3ANNPWZKyjCnw0c+FHFgIyr6a3SPtDBPiTC9rg3fKftKjtMbzvaHmGNFcvgsMjWtDPziQHBe9mZODeQSrteqJmnF3C0J/iiElQ5ck0rmxvEob2qoN7ot3VXo3tZtqC7lDBDXTRzHK94PB7cV68ew0usV4MHivNvh3jA17ZJ+rrMnFfy2cLDKuVRkC/MpKzfhJ3BesduqiSchppnegBqe4yBWXlv0mvy7/x814jDb4ql0vvpgvOabXXVcQA1ytmfY2F+Tnok8XOJrTpw1ts+kvsXdjbuRaHRNRmfhmaOXfSGBSX8wXnBqoVZfnQi4JQTA4sXAuTiSxqVgvHhuVQSJne27kXAmmJdeQAedpxpmQB8x4N3kr3IUw1RNFyybBgdrAcXmSa9iG91l0b3EWsOLmyjlg6PekBEuBd2Xe5OQctBz0v51lVp3gLKTElQowPijJq8uQg1dCd97kBJrx0cjX83Gd6hayJCcHPEQP9m3ZWtwlcgJt6PsQuc/UYUOO6bnw13M9c5c8OWC8IxLU/MrK7Czu5pfzcV103+F6tRTIaaZvWkXXdvAC71ILOXaaLOeGNngLMN0q5TmVEtrghxZjdnZK0JNyYdgtmeptJw4PDx85/y4lF8S0V3zNdI81s+mQYJFxbUfkpEQQNaR8hUqB5t1sZ1YEPd8biQaU8lVtJ0JQuSg80WParFIiS4JgiZYlQ+e3nSh7TCrBocnjKgO0IghMz7rKAUMvhebvd73hSwbw1ULFOKkyQhxBKeyqu9URDiL6gOm7kH2fOhvQSIZDGUCAq1WOBDXT1062jdIai1s/nWrDZp2cCkEwuEO+mBADv3yZy7xGk4Wcr1sRSOiXpkRodfbl0nJyc8VZlEfLZzQLvwfn2TUtx1cinVIBtmz8J1UXEVPGvz+xIGkjhWsWwHTA1X2yhpQDZ7tPoSBU4MH+jgQC4xPRkI2fL0qTMJQOil5LHNjasdDBYPB0zfiL7dDNpOvigppaBoZes7jjlGu1OxZS2bVmFYyvJAkGKYiNx+jfkIkOyR7sCujtvJr24vqa8S1rNmMyDGzNo+F9e9qEk/IyITNlzSuN1EXseSi9l+YuGF8zjGsrSVRleiRx7d5yjknpLhKl5wZOZHG/tEIaf/IQIMZVZg96YHxcVl4lgLS2JPPQjH+0kL0rVeMxgYvuiDNinrt+qw2+AIZuB6Zr5nriUiII6GrpiWvG5zXjj+1kSa47NDZ0lFosaMYN6d+dtCNFe+WxgOoGBmrV5dKIyPwdCuNM42YCZ6puAwIogMGHpCmRipTBac30QMkvFdVSQ7XxRmW9NAVt6VJ0X9IBYPxSzi3Zl5mH+DwhJe5Dr/akOtV8tWdK7F0rwWWxc9QeeuhB5Yr/AOiVLngGzmm8AAAAAElFTkSuQmCC" />
                               <div  style={{ fontSize: "25px" }}>Our History</div>
                        </div>
                        <div>

                            <img style={{margin:"auto"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEElEQVR4nO1aW4tcRRDuNd7vRlFXNzPTdapmlsFE42qMKCz4ImriombUPdUnAxHWB4mof0AfRCNeEm+oiesFBQWvT/ElUcTLw/okQfHGihdwzaqIQdA1MVI7k2X3nD4zfeacs7OG+aCZl+mq+vpUV1dXtVI99NDDYYPKpspJHnsXAtN1pcALPENjmnETBHS95vLFBb9wmvq/oFqrHu353ohmegoMfgGGDrYZ/2qmPdrgY7IA/WP9x+duZEFWtKaWuf6fNtK5YPBhbXDagVCLgb9qpi0QQCEXYhCUL9cG/wHGD5Dx5Fb/LdaLp8qqa6a/0pFaOES/Znwmc7fVpnzbnBKmj+MIaoM3ANNPWZKyjCnw0c+FHFgIyr6a3SPtDBPiTC9rg3fKftKjtMbzvaHmGNFcvgsMjWtDPziQHBe9mZODeQSrteqJmnF3C0J/iiElQ5ck0rmxvEob2qoN7ot3VXo3tZtqC7lDBDXTRzHK94PB7cV68ew0usV4MHivNvh3jA17ZJ+rrMnFfy2cLDKuVRkC/MpKzfhJ3BesduqiSchppnegBqe4yBWXlv0mvy7/x814jDb4ql0vvpgvOabXXVcQA1ytmfY2F+Tnok8XOJrTpw1ts+kvsXdjbuRaHRNRmfhmaOXfSGBSX8wXnBqoVZfnQi4JQTA4sXAuTiSxqVgvHhuVQSJne27kXAmmJdeQAedpxpmQB8x4N3kr3IUw1RNFyybBgdrAcXmSa9iG91l0b3EWsOLmyjlg6PekBEuBd2Xe5OQctBz0v51lVp3gLKTElQowPijJq8uQg1dCd97kBJrx0cjX83Gd6hayJCcHPEQP9m3ZWtwlcgJt6PsQuc/UYUOO6bnw13M9c5c8OWC8IxLU/MrK7Czu5pfzcV103+F6tRTIaaZvWkXXdvAC71ILOXaaLOeGNngLMN0q5TmVEtrghxZjdnZK0JNyYdgtmeptJw4PDx85/y4lF8S0V3zNdI81s+mQYJFxbUfkpEQQNaR8hUqB5t1sZ1YEPd8biQaU8lVtJ0JQuSg80WParFIiS4JgiZYlQ+e3nSh7TCrBocnjKgO0IghMz7rKAUMvhebvd73hSwbw1ULFOKkyQhxBKeyqu9URDiL6gOm7kH2fOhvQSIZDGUCAq1WOBDXT1062jdIai1s/nWrDZp2cCkEwuEO+mBADv3yZy7xGk4Wcr1sRSOiXpkRodfbl0nJyc8VZlEfLZzQLvwfn2TUtx1cinVIBtmz8J1UXEVPGvz+xIGkjhWsWwHTA1X2yhpQDZ7tPoSBU4MH+jgQC4xPRkI2fL0qTMJQOil5LHNjasdDBYPB0zfiL7dDNpOvigppaBoZes7jjlGu1OxZS2bVmFYyvJAkGKYiNx+jfkIkOyR7sCujtvJr24vqa8S1rNmMyDGzNo+F9e9qEk/IyITNlzSuN1EXseSi9l+YuGF8zjGsrSVRleiRx7d5yjknpLhKl5wZOZHG/tEIaf/IQIMZVZg96YHxcVl4lgLS2JPPQjH+0kL0rVeMxgYvuiDNinrt+qw2+AIZuB6Zr5nriUiII6GrpiWvG5zXjj+1kSa47NDZ0lFosaMYN6d+dtCNFe+WxgOoGBmrV5dKIyPwdCuNM42YCZ6puAwIogMGHpCmRipTBac30QMkvFdVSQ7XxRmW9NAVt6VJ0X9IBYPxSzi3Zl5mH+DwhJe5Dr/akOtV8tWdK7F0rwWWxc9QeeuhB5Yr/AOiVLngGzmm8AAAAAElFTkSuQmCC" />
                            <div  style={{ fontSize: "25px",fontWeight:"700" }}>Bussiness Presentation</div>
                        </div>
                    </div>
                </div>

                <div style={{ height: "250px", width: "40%", borderRadius: "15px", boxShadow: "rgb(0 0 0 / 40%) 1px 1px 10px 1px", display: "flex", flexDirection: "column", textAlign: "center" }}>
                    <div className="header1" style={{ fontSize: "25px" }}>Company Related Info</div>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <div>




                            
                            <img  style={{margin:"auto"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEElEQVR4nO1aW4tcRRDuNd7vRlFXNzPTdapmlsFE42qMKCz4ImriombUPdUnAxHWB4mof0AfRCNeEm+oiesFBQWvT/ElUcTLw/okQfHGihdwzaqIQdA1MVI7k2X3nD4zfeacs7OG+aCZl+mq+vpUV1dXtVI99NDDYYPKpspJHnsXAtN1pcALPENjmnETBHS95vLFBb9wmvq/oFqrHu353ohmegoMfgGGDrYZ/2qmPdrgY7IA/WP9x+duZEFWtKaWuf6fNtK5YPBhbXDagVCLgb9qpi0QQCEXYhCUL9cG/wHGD5Dx5Fb/LdaLp8qqa6a/0pFaOES/Znwmc7fVpnzbnBKmj+MIaoM3ANNPWZKyjCnw0c+FHFgIyr6a3SPtDBPiTC9rg3fKftKjtMbzvaHmGNFcvgsMjWtDPziQHBe9mZODeQSrteqJmnF3C0J/iiElQ5ck0rmxvEob2qoN7ot3VXo3tZtqC7lDBDXTRzHK94PB7cV68ew0usV4MHivNvh3jA17ZJ+rrMnFfy2cLDKuVRkC/MpKzfhJ3BesduqiSchppnegBqe4yBWXlv0mvy7/x814jDb4ql0vvpgvOabXXVcQA1ytmfY2F+Tnok8XOJrTpw1ts+kvsXdjbuRaHRNRmfhmaOXfSGBSX8wXnBqoVZfnQi4JQTA4sXAuTiSxqVgvHhuVQSJne27kXAmmJdeQAedpxpmQB8x4N3kr3IUw1RNFyybBgdrAcXmSa9iG91l0b3EWsOLmyjlg6PekBEuBd2Xe5OQctBz0v51lVp3gLKTElQowPijJq8uQg1dCd97kBJrx0cjX83Gd6hayJCcHPEQP9m3ZWtwlcgJt6PsQuc/UYUOO6bnw13M9c5c8OWC8IxLU/MrK7Czu5pfzcV103+F6tRTIaaZvWkXXdvAC71ILOXaaLOeGNngLMN0q5TmVEtrghxZjdnZK0JNyYdgtmeptJw4PDx85/y4lF8S0V3zNdI81s+mQYJFxbUfkpEQQNaR8hUqB5t1sZ1YEPd8biQaU8lVtJ0JQuSg80WParFIiS4JgiZYlQ+e3nSh7TCrBocnjKgO0IghMz7rKAUMvhebvd73hSwbw1ULFOKkyQhxBKeyqu9URDiL6gOm7kH2fOhvQSIZDGUCAq1WOBDXT1062jdIai1s/nWrDZp2cCkEwuEO+mBADv3yZy7xGk4Wcr1sRSOiXpkRodfbl0nJyc8VZlEfLZzQLvwfn2TUtx1cinVIBtmz8J1UXEVPGvz+xIGkjhWsWwHTA1X2yhpQDZ7tPoSBU4MH+jgQC4xPRkI2fL0qTMJQOil5LHNjasdDBYPB0zfiL7dDNpOvigppaBoZes7jjlGu1OxZS2bVmFYyvJAkGKYiNx+jfkIkOyR7sCujtvJr24vqa8S1rNmMyDGzNo+F9e9qEk/IyITNlzSuN1EXseSi9l+YuGF8zjGsrSVRleiRx7d5yjknpLhKl5wZOZHG/tEIaf/IQIMZVZg96YHxcVl4lgLS2JPPQjH+0kL0rVeMxgYvuiDNinrt+qw2+AIZuB6Zr5nriUiII6GrpiWvG5zXjj+1kSa47NDZ0lFosaMYN6d+dtCNFe+WxgOoGBmrV5dKIyPwdCuNM42YCZ6puAwIogMGHpCmRipTBac30QMkvFdVSQ7XxRmW9NAVt6VJ0X9IBYPxSzi3Zl5mH+DwhJe5Dr/akOtV8tWdK7F0rwWWxc9QeeuhB5Yr/AOiVLngGzmm8AAAAAElFTkSuQmCC" />
                               <div  style={{ fontSize: "25px" }}>Our History</div>
                        </div>
                        <div>

                            <img style={{margin:"auto"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEElEQVR4nO1aW4tcRRDuNd7vRlFXNzPTdapmlsFE42qMKCz4ImriombUPdUnAxHWB4mof0AfRCNeEm+oiesFBQWvT/ElUcTLw/okQfHGihdwzaqIQdA1MVI7k2X3nD4zfeacs7OG+aCZl+mq+vpUV1dXtVI99NDDYYPKpspJHnsXAtN1pcALPENjmnETBHS95vLFBb9wmvq/oFqrHu353ohmegoMfgGGDrYZ/2qmPdrgY7IA/WP9x+duZEFWtKaWuf6fNtK5YPBhbXDagVCLgb9qpi0QQCEXYhCUL9cG/wHGD5Dx5Fb/LdaLp8qqa6a/0pFaOES/Znwmc7fVpnzbnBKmj+MIaoM3ANNPWZKyjCnw0c+FHFgIyr6a3SPtDBPiTC9rg3fKftKjtMbzvaHmGNFcvgsMjWtDPziQHBe9mZODeQSrteqJmnF3C0J/iiElQ5ck0rmxvEob2qoN7ot3VXo3tZtqC7lDBDXTRzHK94PB7cV68ew0usV4MHivNvh3jA17ZJ+rrMnFfy2cLDKuVRkC/MpKzfhJ3BesduqiSchppnegBqe4yBWXlv0mvy7/x814jDb4ql0vvpgvOabXXVcQA1ytmfY2F+Tnok8XOJrTpw1ts+kvsXdjbuRaHRNRmfhmaOXfSGBSX8wXnBqoVZfnQi4JQTA4sXAuTiSxqVgvHhuVQSJne27kXAmmJdeQAedpxpmQB8x4N3kr3IUw1RNFyybBgdrAcXmSa9iG91l0b3EWsOLmyjlg6PekBEuBd2Xe5OQctBz0v51lVp3gLKTElQowPijJq8uQg1dCd97kBJrx0cjX83Gd6hayJCcHPEQP9m3ZWtwlcgJt6PsQuc/UYUOO6bnw13M9c5c8OWC8IxLU/MrK7Czu5pfzcV103+F6tRTIaaZvWkXXdvAC71ILOXaaLOeGNngLMN0q5TmVEtrghxZjdnZK0JNyYdgtmeptJw4PDx85/y4lF8S0V3zNdI81s+mQYJFxbUfkpEQQNaR8hUqB5t1sZ1YEPd8biQaU8lVtJ0JQuSg80WParFIiS4JgiZYlQ+e3nSh7TCrBocnjKgO0IghMz7rKAUMvhebvd73hSwbw1ULFOKkyQhxBKeyqu9URDiL6gOm7kH2fOhvQSIZDGUCAq1WOBDXT1062jdIai1s/nWrDZp2cCkEwuEO+mBADv3yZy7xGk4Wcr1sRSOiXpkRodfbl0nJyc8VZlEfLZzQLvwfn2TUtx1cinVIBtmz8J1UXEVPGvz+xIGkjhWsWwHTA1X2yhpQDZ7tPoSBU4MH+jgQC4xPRkI2fL0qTMJQOil5LHNjasdDBYPB0zfiL7dDNpOvigppaBoZes7jjlGu1OxZS2bVmFYyvJAkGKYiNx+jfkIkOyR7sCujtvJr24vqa8S1rNmMyDGzNo+F9e9qEk/IyITNlzSuN1EXseSi9l+YuGF8zjGsrSVRleiRx7d5yjknpLhKl5wZOZHG/tEIaf/IQIMZVZg96YHxcVl4lgLS2JPPQjH+0kL0rVeMxgYvuiDNinrt+qw2+AIZuB6Zr5nriUiII6GrpiWvG5zXjj+1kSa47NDZ0lFosaMYN6d+dtCNFe+WxgOoGBmrV5dKIyPwdCuNM42YCZ6puAwIogMGHpCmRipTBac30QMkvFdVSQ7XxRmW9NAVt6VJ0X9IBYPxSzi3Zl5mH+DwhJe5Dr/akOtV8tWdK7F0rwWWxc9QeeuhB5Yr/AOiVLngGzmm8AAAAAElFTkSuQmCC" />
                            <div  style={{ fontSize: "25px",fontWeight:"700" }}>Bussiness Presentation</div>
                        </div>
                    </div>
                </div>
               


            </div>





        </div>
    )
}

export default Management;