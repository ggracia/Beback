using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace BeBack.Hubs
{
    public class ServerHub : Hub 
    {
        public void StartTimer(int milliseconds) {
            Clients.All.StartTimer(milliseconds);
        }

        public void BlackScreenOut()
        {
            Clients.All.BlackScreenOut();
        }

        public void RecoverScreen()
        {
            Clients.All.RecoverScreen();
        }

        public void ChangeTitle(string txt)
        {
            Clients.All.ChangeTitle(txt);
        }

        public void ChangeSubtitle(string txt)
        {
            Clients.All.ChangeSubtitle(txt);
        }

        public void ChangeMessage(string txt)
        {
            Clients.All.ChangeMessage(txt);
        }

        public void ShowWeek()
        {
            Clients.All.ShowWeek();
        }

        public void ShowMonth()
        {
            Clients.All.ShowMonth();
        }

        public void PageReload()
        {
            Clients.All.PageReload();
        }




    }
}