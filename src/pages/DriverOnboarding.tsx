
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Save, UserCheck, IdCard, Car } from 'lucide-react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const DriverOnboarding = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);
  
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Driver Created",
      description: "New driver has been successfully added",
    });
    navigate('/drivers');
  };
  
  return (
    <div className="flex h-screen bg-gray-50">
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <Sidebar 
        className={`fixed z-20 lg:static transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`} 
      />
      
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <Header 
          toggleSidebar={toggleSidebar} 
        />
        
        <main className="flex-1 overflow-y-auto">
          <div className="w-full max-w-4xl mx-auto px-4 py-6 space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate('/drivers')}
                className="h-9 w-9 rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-bold">Add New Driver</h1>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <UserCheck className="h-5 w-5 text-laundry-blue" />
                  <h2 className="text-lg font-semibold">Personal Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter email address" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter phone number" required />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <IdCard className="h-5 w-5 text-laundry-blue" />
                  <h2 className="text-lg font-semibold">Driver Documentation</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="licenseNumber">License Number</Label>
                    <Input id="licenseNumber" placeholder="Enter license number" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="licenseExpiry">License Expiry Date</Label>
                    <Input id="licenseExpiry" type="date" required />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Car className="h-5 w-5 text-laundry-blue" />
                  <h2 className="text-lg font-semibold">Vehicle Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="vehicleModel">Vehicle Model</Label>
                    <Input id="vehicleModel" placeholder="Enter vehicle model" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="licensePlate">License Plate</Label>
                    <Input id="licensePlate" placeholder="Enter license plate" required />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Enter any additional information about the driver or vehicle" 
                      className="h-24"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 my-4">
                <Checkbox id="isActive" />
                <Label htmlFor="isActive" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Set as active driver
                </Label>
              </div>
              
              <div className="flex justify-end gap-3">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => navigate('/drivers')}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-laundry-blue hover:bg-laundry-blue-dark"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Driver
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DriverOnboarding;
