const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroSequelize = require('admin-bro-sequelize');
const uploadFeature = require('@admin-bro/upload');
const UploadProvider = require('./src/admin/providers/uploadProvider');

const db = require("./src/db");
const envVariables = require("./src/config");

AdminBro.registerAdapter(AdminBroSequelize);

const imageValidation = {
  mimeTypes: ['image/jpeg', 'image/png', 'image/svg'],
}
const teamProvider = new UploadProvider("uploads/teams", "uploads/teams");
const projectProvider = new UploadProvider("upload/projects", "uploads/projects");
const productProvider = new UploadProvider("upload/products", "uploads/products");
const technologyProvider = new UploadProvider("upload/technologies", "uploads/technologies");
const serviceProvider = new UploadProvider("upload/service", "uploads/service");

const adminBro = new AdminBro({
    databases: [],
    rootPath: '/admin',
    branding: {
        logo: '/images/logos/logoBSmall.jpg',
        companyName: 'Odyssey Analytics',
        softwareBrothers: false
    },
    resources: [
        {
        resource: db.teams,
        options: {
            listProperties: ['memberName', 'memberPosition', 'linkedinUrl', 'displayOrder'],
            properties: {
                imageUrl: { isVisible: false },
                imageMimeType: { isVisible: false}
            },
        },
        features: [uploadFeature({
            provider: teamProvider,
            properties: {
                key: 'imageUrl', // to this db field feature will safe image url
                mimeType: 'imageMimeType' // this property is important because allows to have previews
            },
            validation: imageValidation,
        },
        )]
    },
    {
        resource: db.projects,
        options: {
            listProperties: ['projectName', 'projectDescription', 'displayOrder'],
            properties: {
                projectDescription: { type: 'richtext' },
                imageUrl: { isVisible: false },
                imageMimeType: { isVisible: false}
            },
        },
        features: [uploadFeature({
            provider: projectProvider,
            properties: {
                key: 'imageUrl', // to this db field feature will safe image  url
                mimeType: 'imageMimeType' // this property is important because allows to have previews
            },
            validation: imageValidation,
        },
        )]
    },{
        resource: db.products,
        options: {
            listProperties: ['productName', 'productDescription', 'displayOrder'],
            properties: {
                productDescription: { type: 'richtext' },
                imageUrl: { isVisible: false },
                imageMimeType: { isVisible: false}
            },
        },
        features: [uploadFeature({
            provider: productProvider,
            properties: {
                key: 'imageUrl', // to this db field feature will safe image  url
                mimeType: 'imageMimeType' // this property is important because allows to have previews
            },
            validation: imageValidation,
        },
        )]
    },
    {
        resource: db.technologies,
        options: {
            listProperties: ['technologyName', 'technologyDescription', 'displayOrder'],
            properties: {
                technologyDescription: { type: 'richtext' },
                imageUrl: { isVisible: false },
                imageMimeType: { isVisible: false}
            },
        },
        features: [uploadFeature({
            provider: technologyProvider,
            properties: {
                key: 'imageUrl', // to this db field feature will safe image  url
                mimeType: 'imageMimeType' // this property is important because allows to have previews
            },
            validation: imageValidation,
        },
        )]
    },
    {
        resource: db.services,
        options: {
            listProperties: ['serviceName', 'serviceDescription', 'displayOrder'],
            properties: {
                serviceDescription: { type: 'richtext' },
                imageUrl: { isVisible: false },
                imageMimeType: { isVisible: false}
            },
        },
        features: [uploadFeature({
            provider: serviceProvider,
            properties: {
                key: 'imageUrl', // to this db field feature will safe image  url
                mimeType: 'imageMimeType' // this property is important because allows to have previews
            },
            validation: imageValidation,
        },
        )]
    }]
});

const ADMIN = {
    email: envVariables.admin_email,
    password: envVariables.admin_password
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    cookieName: envVariables.cookie_name || 'odysseyAnalytics',
    cookiePassword: envVariables.cookie_password || 'odysseyAnalytics@cookiePassword123',
    authenticate: async (email, password) => {
        if (email === ADMIN.email && password === ADMIN.password) return ADMIN;
        return null;
    }
});

module.exports = router;